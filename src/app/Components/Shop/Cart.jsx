"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const Cart = () => {
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartTotal,
    } = useCart();

const formatPrice = (price) => {
    return `£${Number(price).toFixed(2)}`;
};

    if (cart.length === 0) {
        return (
            <div className="th-cart-wrapper section-padding fix bg-white">
                <div className="container text-center">
                    <h2 className="mb-3">Your cart is empty</h2>
                    <p className="mb-4">
                        You haven't added any food to your cart yet.
                    </p>

                    <Link href="/shop" className="theme-btn">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="th-cart-wrapper section-padding fix bg-white">
            <div className="container">

                <form className="woocommerce-cart-form">
                    <table className="cart_table">
                        <thead>
                            <tr>
                                <th className="cart-col-image">Menu Image</th>
                                <th className="cart-colname">Menu Name</th>
                                <th className="cart-col-price">Price</th>
                                <th className="cart-col-quantity">Quantity</th>
                                <th className="cart-col-total">Total</th>
                                <th className="cart-col-remove">Remove</th>
                            </tr>
                        </thead>

                        <tbody>

                            {cart.map((item) => (
                                <tr className="cart_item" key={item.id}>

                                    {/* Product Image */}
                                    <td data-title="Product">
                                        <Link
                                            className="cartimage"
                                            href="/shop"
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={91}
                                                height={91}
                                            />
                                        </Link>
                                    </td>

                                    {/* Product Name */}
                                    <td data-title="Name">
                                        <Link
                                            className="cartname"
                                            href="/shop"
                                        >
                                            {item.name}
                                        </Link>
                                    </td>

                                    {/* Price */}
                                    <td data-title="Price">
                                        <span className="amount">
                                            <bdi>
                                                {formatPrice(item.price)}
                                            </bdi>
                                        </span>
                                    </td>

                                    {/* Quantity */}
                                    <td data-title="Quantity">
                                        <div className="quantity">

                                            <button
                                                type="button"
                                                className="quantity-minus qty-btn"
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                            >
                                                <i className="bi bi-dash-lg"></i>
                                            </button>

                                            <input
                                                type="number"
                                                className="qty-input"
                                                value={item.quantity}
                                                readOnly
                                                min="1"
                                                max="99"
                                            />

                                            <button
                                                type="button"
                                                className="quantity-plus qty-btn"
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                            >
                                                <i className="bi bi-plus-lg"></i>
                                            </button>

                                        </div>
                                    </td>

                                    {/* Item Total */}
                                    <td data-title="Total">
                                        <span className="amount">
                                            <bdi>
                                                {formatPrice(
                                                    item.price *
                                                    item.quantity
                                                )}
                                            </bdi>
                                        </span>
                                    </td>

                                    {/* Remove */}
                                    <td data-title="Remove">
                                        <button
                                            type="button"
                                            className="remove"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>

                                </tr>
                            ))}

                            <tr>
                                <td colSpan="6" className="actions">

                                    <Link
                                        href="/shop"
                                        className="theme-btn"
                                    >
                                        Continue Shopping
                                    </Link>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>

                {/* Cart Totals */}
                <div className="row justify-content-end">
                    <div className="col-md-8 col-lg-7 col-xl-6">

                        <h2 className="h4 summary-title">
                            Cart Totals
                        </h2>

                        <table className="cart_totals">
                            <tbody>

                                <tr>
                                    <td>Cart Subtotal</td>

                                    <td data-title="Cart Subtotal">
                                        <span className="amount">
                                            <bdi>
                                                {formatPrice(cartTotal)}
                                            </bdi>
                                        </span>
                                    </td>
                                </tr>

                                <tr className="shipping">
                                    <th>Shipping and Handling</th>

                                    <td data-title="Shipping and Handling">
                                        <ul className="woocommerce-shipping-methods list-unstyled">

                                            <li>
                                                <input
                                                    type="radio"
                                                    id="free_shipping"
                                                    name="shipping_method"
                                                    className="shipping_method"
                                                    defaultChecked
                                                />

                                                <label htmlFor="free_shipping">
                                                    Shipping calculated during checkout
                                                </label>
                                            </li>

                                        </ul>
                                    </td>
                                </tr>

                            </tbody>

                            <tfoot>
                                <tr className="order-total">

                                    <td>Order Total</td>

                                    <td data-title="Total">
                                        <strong>
                                            <span className="amount">
                                                <bdi>
                                                    {formatPrice(cartTotal)}
                                                </bdi>
                                            </span>
                                        </strong>
                                    </td>

                                </tr>
                            </tfoot>
                        </table>

                        <div className="wc-proceed-to-checkout mt-3">

                            <Link
                                href="/shop/checkout"
                                className="theme-btn btn-fw"
                            >
                                Proceed to checkout
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;