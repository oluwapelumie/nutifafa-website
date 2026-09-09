"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const ShopCard = ({ img, title, content, price }) => {
    const { addToCart } = useCart();

    const numericPrice = parseFloat(
        String(price).replace(/[^0-9.]/g, "")
    );

    const handleAddToCart = () => {
        addToCart({
            id: title.toLowerCase().replace(/\s+/g, "-"),
            name: title,
            image: img,
            description: content,
            price: numericPrice,
        });
    };

    return (
        <div
            className="dishes-card style2 wow fadeInUp"
            data-wow-delay="0.2s"
        >
            <div className="dishes-thumb">
                <Image
                    src={img}
                    alt={title}
                    width={158}
                    height={158}
                />

                <div className="circle-shape">
                    <Image
                        className="cir36"
                        src="/assets/img/food-items/circleShape.png"
                        alt=""
                        width={174}
                        height={174}
                    />
                </div>
            </div>

            <div className="dishes-content">
                <Link href="">
                    <h3>{title}</h3>
                </Link>

                <div className="star">
                    <Image
                        src="/assets/img/icon/star2.svg"
                        alt="Rating"
                        width={86}
                        height={16}
                    />
                </div>

                <div className="text">{content}</div>

                <h6>{price}</h6>

                <button
                    type="button"
                    onClick={handleAddToCart}
                    className="theme-btn style6"
                >
                    Order Now <i className="bi bi-basket2"></i>
                </button>
            </div>
        </div>
    );
};

export default ShopCard;