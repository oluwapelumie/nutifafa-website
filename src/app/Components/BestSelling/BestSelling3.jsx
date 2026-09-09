import Image from "next/image";
import Link from "next/link";

const BestSelling3 = () => {

    const foodItems = [
        {img:'/assets/img/dishes/dishes6_1.png', title:'Jollof Rice', content:'Fluffy, flavorful West African Jollof rice served with your choice of tender chicken drumstick or turkey thig', price:'£5.5|£6.5'},    
        {img:'/assets/img/dishes/dishes6_2.png', title:'Assorted Meat Stew', content:'Rich tomato stew with assorted meats, full of bold, savory flavors', price:'£10|£12'},    
        {img:'/assets/img/dishes/dishes6_3.png', title:'Ayamase', content:'A vibrant green pepper stew packed with assortedmeats, bursting with bold, spicy flavors', price:'£7|£9.5'},    
        {img:'/assets/img/dishes/dishes6_4.png', title:'Gizzdodo', content:'Spicy chicken gizzards tossed with sweet, fried plantains for a perfect mix of heat and sweetness', price:'£5|£7'},       
      ]; 

    return (
        <section className="popular-dishes-section fix section-padding pb-0">
        <div className="popular-dishes-wrapper-container">
            <div className="container">
                <div className="popular-dishes-wrapper style4">
                    <div className="shape1 float-bob-x d-none d-xxl-block"><Image src="/assets/img/shape/dishesShape5_1.png" alt="img" width={101} height={79}   /></div>
                    <div className="container">
                        <div className="title-area mb-45">
                            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                            <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                                POPULAR DISHES<Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s"
                                >
                                Our Most Popular Deals
                            </h2>
                        </div>
                        <div className="dishes-card-wrap style4">
                        {foodItems.map((item, i) => (
                            <div  key={i} className="dishes-card style5 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="dishes-thumb">
                                <Image src={item.img} alt="img" width={170} height={271}   />
                                </div>
                                <div className="dishes-content">
                                    <Link href="/shop">
                                        <h3>{item.title}</h3>
                                    </Link>
                                    <div className="star"><img src="/assets/img/icon/star2.svg" alt="icon" /></div>
                                    <div className="text">{item.content}</div>
                                    <h6>{item.price}</h6>
                                    <Link href="/shop" className="theme-btn style6"> Order Now <i className="bi bi-basket2"></i></Link>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
};

export default BestSelling3;