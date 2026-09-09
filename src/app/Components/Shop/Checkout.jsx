"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        orderType: "Delivery",
        deliveryDate: "",
        deliveryTime: "",
        address: "",
        notes: "",
        paymentMethod: "Cash",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // --------------------------------
    // HANDLE FORM CHANGES
    // --------------------------------

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // --------------------------------
    // SUBMIT ORDER
    // --------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        try {
            setIsSubmitting(true);

            // CHECK CART
            if (!cart || cart.length === 0) {
                alert("Your cart is empty.");
                setIsSubmitting(false);
                return;
            }

            // CHECK CUSTOMER DETAILS
            if (!formData.fullName.trim()) {
                alert("Please enter your full name.");
                setIsSubmitting(false);
                return;
            }

            if (!formData.phone.trim()) {
                alert("Please enter your phone number.");
                setIsSubmitting(false);
                return;
            }

            if (!formData.email.trim()) {
                alert("Please enter your email address.");
                setIsSubmitting(false);
                return;
            }

            if (!formData.deliveryDate) {
                alert("Please select a delivery/collection date.");
                setIsSubmitting(false);
                return;
            }

            if (!formData.deliveryTime) {
                alert("Please select a delivery/collection time.");
                setIsSubmitting(false);
                return;
            }

            if (
                formData.orderType === "Delivery" &&
                !formData.address.trim()
            ) {
                alert("Please enter your delivery address.");
                setIsSubmitting(false);
                return;
            }

            // ========================================
            // SEND ORDER TO SERVER-SIDE API ROUTE
            // (server recalculates prices + does the
            // Supabase insert with the service role key,
            // bypassing RLS safely)
            // ========================================

            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formData, cart }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Could not place order");
            }

            const order = result.order;

            console.log("Order created:", order);

            // ========================================
            // CREATE WHATSAPP MESSAGE
            // ========================================

            const subtotal = Number(cartTotal);
            const deliveryFee = 0;
            const total = subtotal + deliveryFee;

            const itemsMessage = cart
                .map((item) => {
                    const itemTotal =
                        Number(item.price) * Number(item.quantity);

                    return `${item.name} x${item.quantity} - £${itemTotal.toFixed(
                        2
                    )}`;
                })
                .join("\n");

            const whatsappMessage = `
🍽️ *NEW NUTIFA ORDER*

*ORDER ID*
${order.id}

*CUSTOMER DETAILS*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}

*ORDER TYPE*
${formData.orderType}

*DATE*
${formData.deliveryDate}

*TIME*
${formData.deliveryTime}

*ADDRESS*
${
    formData.orderType === "Delivery"
        ? formData.address
        : "Collection"
}

*ORDER ITEMS*
${itemsMessage}

*SUBTOTAL*
£${subtotal.toFixed(2)}

*DELIVERY FEE*
£${deliveryFee.toFixed(2)}

*TOTAL*
£${total.toFixed(2)}

*PAYMENT METHOD*
${formData.paymentMethod}

*NOTES*
${formData.notes || "No special notes"}

Thank you.
            `.trim();

            // ========================================
            // WHATSAPP
            // ========================================

            const whatsappNumber = "447470573218";

            const whatsappUrl =
                `https://wa.me/£${whatsappNumber}?text=` +
                encodeURIComponent(whatsappMessage);

            // ========================================
            // CLEAR CART
            // ========================================

            clearCart();

            // ========================================
            // OPEN WHATSAPP
            // ========================================

            window.location.href = whatsappUrl;

        } catch (error) {
            console.error("Checkout error:", error);

            alert(
                error.message ||
                "We couldn't place your order. Please try again."
            );

            setIsSubmitting(false);
        }
    };

    // --------------------------------
    // FORMAT PRICE
    // --------------------------------

    const formatPrice = (price) => {
        return `£${Number(price).toFixed(2)}`;
    };

    // --------------------------------
    // EMPTY CART
    // --------------------------------

    if (cart.length === 0) {
        return (
            <div className="th-checkout-wrapper section-padding fix">
                <div className="container text-center">
                    <h2 className="h4 mb-3">
                        Your cart is empty
                    </h2>

                    <p className="mb-4">
                        Please add something to your cart before checking out.
                    </p>

                    <a
                        href="/shop"
                        className="theme-btn"
                    >
                        Back to Shop
                    </a>
                </div>
            </div>
        );
    }

    // --------------------------------
    // TODAY'S DATE
    // --------------------------------

    const today = new Date();

    const todayString = new Date(
        today.getTime() -
            today.getTimezoneOffset() * 60000
    )
        .toISOString()
        .split("T")[0];

    // --------------------------------
    // CHECKOUT PAGE
    // --------------------------------

    return (
        <div className="th-checkout-wrapper section-padding fix">
            <div className="container">

                <form
                    className="woocommerce-checkout mt-2"
                    onSubmit={handleSubmit}
                >

                    <div className="row">

                        {/* CUSTOMER DETAILS */}

                        <div className="col-lg-6">

                            <h2 className="h4 mb-4">
                                Your Details
                            </h2>

                            <div className="row">

                                {/* FULL NAME */}

                                <div className="col-12 form-group">
                                    <label className="mb-2">
                                        Full Name *
                                    </label>

                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-control"
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* PHONE */}

                                <div className="col-12 form-group">
                                    <label className="mb-2">
                                        Phone Number *
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        placeholder="e.g. 07470 573218"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* EMAIL */}

                                <div className="col-12 form-group">
                                    <label className="mb-2">
                                        Email Address *
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* DELIVERY / COLLECTION */}

                                <div className="col-12 form-group">
                                    <label className="mb-2">
                                        Delivery / Collection *
                                    </label>

                                    <select
                                        name="orderType"
                                        className="single-select w-100"
                                        value={formData.orderType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Delivery">
                                            Delivery
                                        </option>

                                        <option value="Collection">
                                            Collection
                                        </option>
                                    </select>
                                </div>

                                {/* DATE */}

                                <div className="col-md-6 form-group">
                                    <label className="mb-2">
                                        {formData.orderType === "Delivery"
                                            ? "Delivery Date *"
                                            : "Collection Date *"}
                                    </label>

                                    <input
                                        type="date"
                                        name="deliveryDate"
                                        className="form-control"
                                        value={formData.deliveryDate}
                                        min={todayString}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* TIME */}

                                <div className="col-md-6 form-group">
                                    <label className="mb-2">
                                        {formData.orderType === "Delivery"
                                            ? "Delivery Time *"
                                            : "Collection Time *"}
                                    </label>

                                    <select
                                        name="deliveryTime"
                                        className="single-select w-100"
                                        value={formData.deliveryTime}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">
                                            Select time
                                        </option>

                                        <option value="10:00 AM">
                                            10:00 AM
                                        </option>

                                        <option value="10:30 AM">
                                            10:30 AM
                                        </option>

                                        <option value="11:00 AM">
                                            11:00 AM
                                        </option>

                                        <option value="11:30 AM">
                                            11:30 AM
                                        </option>

                                        <option value="12:00 PM">
                                            12:00 PM
                                        </option>

                                        <option value="12:30 PM">
                                            12:30 PM
                                        </option>

                                        <option value="1:00 PM">
                                            1:00 PM
                                        </option>

                                        <option value="1:30 PM">
                                            1:30 PM
                                        </option>

                                        <option value="2:00 PM">
                                            2:00 PM
                                        </option>

                                        <option value="2:30 PM">
                                            2:30 PM
                                        </option>

                                        <option value="3:00 PM">
                                            3:00 PM
                                        </option>

                                        <option value="3:30 PM">
                                            3:30 PM
                                        </option>

                                        <option value="4:00 PM">
                                            4:00 PM
                                        </option>

                                        <option value="4:30 PM">
                                            4:30 PM
                                        </option>

                                        <option value="5:00 PM">
                                            5:00 PM
                                        </option>

                                        <option value="5:30 PM">
                                            5:30 PM
                                        </option>

                                        <option value="6:00 PM">
                                            6:00 PM
                                        </option>

                                        <option value="6:30 PM">
                                            6:30 PM
                                        </option>

                                        <option value="7:00 PM">
                                            7:00 PM
                                        </option>
                                    </select>
                                </div>

                                {/* DELIVERY ADDRESS */}

                                {formData.orderType === "Delivery" && (
                                    <div className="col-12 form-group">
                                        <label className="mb-2">
                                            Delivery Address *
                                        </label>

                                        <textarea
                                            name="address"
                                            rows="4"
                                            className="form-control"
                                            placeholder="Enter your full delivery address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                )}

                                {/* NOTES */}

                                <div className="col-12 form-group">
                                    <label className="mb-2">
                                        Notes
                                    </label>

                                    <textarea
                                        name="notes"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Any special instructions for your order?"
                                        value={formData.notes}
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                        </div>

                        {/* ORDER SUMMARY */}

                        <div className="col-lg-6">

                            <h2 className="h4 mb-4">
                                Your Order
                            </h2>

                            <table className="cart_table mb-20">

                                <thead>
                                    <tr>
                                        <th className="cart-col-image">
                                            Image
                                        </th>

                                        <th className="cart-colname">
                                            Product
                                        </th>

                                        <th className="cart-col-price">
                                            Price
                                        </th>

                                        <th className="cart-col-quantity">
                                            Qty
                                        </th>

                                        <th className="cart-col-total">
                                            Total
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {cart.map((item) => (
                                        <tr
                                            className="cart_item"
                                            key={item.id}
                                        >

                                            <td data-title="Product">
                                                <img
                                                    width="70"
                                                    height="70"
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                            </td>

                                            <td data-title="Name">
                                                {item.name}
                                            </td>

                                            <td data-title="Price">
                                                {formatPrice(item.price)}
                                            </td>

                                            <td data-title="Quantity">
                                                <strong>
                                                    {item.quantity}
                                                </strong>
                                            </td>

                                            <td data-title="Total">
                                                {formatPrice(
                                                    Number(item.price) *
                                                        Number(item.quantity)
                                                )}
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                                <tfoot className="checkout-ordertable">

                                    <tr className="cart-subtotal">
                                        <th>
                                            Subtotal
                                        </th>

                                        <td
                                            colSpan="4"
                                            className="text-end"
                                        >
                                            {formatPrice(cartTotal)}
                                        </td>
                                    </tr>

                                    <tr className="order-total">
                                        <th>
                                            Total
                                        </th>

                                        <td
                                            colSpan="4"
                                            className="text-end"
                                        >
                                            <strong>
                                                {formatPrice(cartTotal)}
                                            </strong>
                                        </td>
                                    </tr>

                                </tfoot>

                            </table>

                            {/* PAYMENT */}

                            <div className="mt-4">

                                <h4 className="mb-3">
                                    Payment Method *
                                </h4>

                                <ul className="wc_payment_methods payment_methods methods">

                                    <li className="wc_payment_method">

                                        <input
                                            id="payment_cash"
                                            type="radio"
                                            name="paymentMethod"
                                            value="Cash"
                                            checked={
                                                formData.paymentMethod ===
                                                "Cash"
                                            }
                                            onChange={handleChange}
                                            required
                                        />

                                        <label htmlFor="payment_cash">
                                            Cash
                                        </label>

                                    </li>

                                    <li className="wc_payment_method">

                                        <input
                                            id="payment_bank"
                                            type="radio"
                                            name="paymentMethod"
                                            value="Bank Transfer"
                                            checked={
                                                formData.paymentMethod ===
                                                "Bank Transfer"
                                            }
                                            onChange={handleChange}
                                        />

                                        <label htmlFor="payment_bank">
                                            Bank Transfer
                                        </label>

                                    </li>

                                </ul>

                            </div>

                            {/* PLACE ORDER */}

                            <div className="form-row place-order mt-4">

                                <button
                                    type="submit"
                                    className="theme-btn btn-fw"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting
                                        ? "Sending Order..."
                                        : "Place Order"}
                                </button>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default Checkout;
