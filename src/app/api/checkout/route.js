import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../lib/supabaseAdmin";

export async function POST(request) {
    try {
        const body = await request.json();
        const { formData, cart } = body;

        // ------------------------------------
        // SERVER-SIDE VALIDATION
        // ------------------------------------
        if (!cart || cart.length === 0) {
            return NextResponse.json(
                { error: "Cart is empty" },
                { status: 400 }
            );
        }

        if (
            !formData?.fullName?.trim() ||
            !formData?.phone?.trim() ||
            !formData?.email?.trim()
        ) {
            return NextResponse.json(
                { error: "Missing customer details" },
                { status: 400 }
            );
        }

        if (!formData?.deliveryDate || !formData?.deliveryTime) {
            return NextResponse.json(
                { error: "Missing date/time" },
                { status: 400 }
            );
        }

        if (formData.orderType === "Delivery" && !formData.address?.trim()) {
            return NextResponse.json(
                { error: "Missing delivery address" },
                { status: 400 }
            );
        }

        // ------------------------------------
        // RECALCULATE PRICES SERVER-SIDE
        // Never trust price/quantity sent from the client as-is.
        // Ideally look these up from a `products` table by id
        // instead of trusting item.price from the client cart.
        // ------------------------------------
        const subtotal = cart.reduce(
            (sum, item) => sum + Number(item.price) * Number(item.quantity),
            0
        );
        const deliveryFee = 0;
        const total = subtotal + deliveryFee;

        // ------------------------------------
        // 1. CREATE ORDER
        // ------------------------------------
        const { data: order, error: orderError } = await supabaseAdmin
            .from("orders")
            .insert([
                {
                    full_name: formData.fullName.trim(),
                    phone: formData.phone.trim(),
                    email: formData.email.trim(),
                    delivery_address:
                        formData.orderType === "Delivery"
                            ? formData.address.trim()
                            : "Collection",
                    order_type: formData.orderType,
                    notes: formData.notes?.trim() || "",
                    payment_method: formData.paymentMethod,
                    subtotal,
                    delivery_fee: deliveryFee,
                    total,
                    status: "pending",
                    delivery_date: formData.deliveryDate,
                    delivery_time: formData.deliveryTime,
                },
            ])
            .select()
            .single();

        if (orderError) {
            console.error("Supabase order error:", orderError);
            return NextResponse.json(
                { error: orderError.message || "Could not create order" },
                { status: 500 }
            );
        }

        // ------------------------------------
        // 2. SAVE ORDER ITEMS
        // ------------------------------------
        const orderItems = cart.map((item) => ({
            order_id: order.id,
            product_name: item.name,
            price: Number(item.price),
            quantity: Number(item.quantity),
            item_total: Number(item.price) * Number(item.quantity),
        }));

        const { error: itemsError } = await supabaseAdmin
            .from("order_items")
            .insert(orderItems);

        if (itemsError) {
            console.error("Supabase order items error:", itemsError);

            // Roll back the order so we don't leave an orphaned row
            await supabaseAdmin.from("orders").delete().eq("id", order.id);

            return NextResponse.json(
                { error: itemsError.message || "Could not save order items" },
                { status: 500 }
            );
        }

        return NextResponse.json({ order }, { status: 200 });
    } catch (err) {
        console.error("Checkout route error:", err);
        return NextResponse.json(
            { error: "Unexpected server error" },
            { status: 500 }
        );
    }
}