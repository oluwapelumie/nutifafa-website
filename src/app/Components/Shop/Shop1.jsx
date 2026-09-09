import Link from "next/link";
import ShopCard from "../Card/ShopCard";
import Image from "next/image";

// --------------------------------
// MENU DATA (pulled from FoodItem3)
// NOTE: real photos aren't attached to these items yet —
// placeholder images are cycled below. Swap `img` for real
// food photos per item when you have them.
// --------------------------------

const placeholderImages = [
    "/assets/img/dishes/dishes2_1.png",
    "/assets/img/dishes/dishes2_2.png",
    "/assets/img/dishes/dishes2_3.png",
    "/assets/img/dishes/dishes2_4.png",
];

const menuItems = [
    // ---- Starters ----
    { title: "Moi Moi", content: "Nigerian delicacy made from blended beans, peppers, onions, and spices. Soft, savory, and rich in flavor", price: "£4" },
    { title: "Chicken/Beef Kebab", content: "Juicy chicken pieces or beef grilled on a skewer with colorful peppers and onions. Packed with flavor", price: "£6" },
    { title: "Gizzdodo", content: "Spicy chicken gizzards tossed with sweet, fried plantains for a perfect mix of heat and sweetness", price: "£6|8" },
    { title: "Chicken Wings", content: "Six juicy wings cooked with bold West African seasonings for a spicy, flavorful kick", price: "£5.5" },
    { title: "Asun", content: "Tender, smoky goat meat grilled with a spicy kick", price: "£6|8" },
    { title: "Chofi", content: "Tender turkey tail grilled to perfection with bold spices. Smoky, flavorful, and indulgent.", price: "£2" },
    { title: "Kelewele", content: "Spicy Ghanaian fried plantains tossed in ginger, garlic, and chili. Sweet, savory, and full of flavor.", price: "£3.5" },
    { title: "Fried Yam", content: "Fried yam with green sauce and shito. Crispy, spicy, and full of flavor.", price: "£3|5" },
    { title: "Chicken Special", content: "Tender chicken thighs & drumsticks cooked with sweet peppers, onions, scotch bonnet, and herbs, then roasted to perfection.", price: "£10|13" },
    { title: "Red Red", content: "Hearty Ghanaian red beans cooked in palm oil with spices and seasonings.", price: "£5|7" },

    // ---- Main Course ----
    { title: "Jollof Rice", content: "Fluffy, flavorful West African Jollof rice served with your choice of tender chicken drumstick or turkey thigh", price: "£6|8" },
    { title: "Fried Rice", content: "Savory fried rice loaded with veggies and spices, served with your choice of juicy chicken drumstick or turkey thigh", price: "£6|8" },
    { title: "Half & Half Rice Box", content: "Half Jollof and half Fried rice together with your choice of juicy chicken drumstick or turkey thigh", price: "£6.5|8.5" },
    { title: "Assorted Meat Stew", content: "Rich tomato stew with assorted meats, full of bold, savory flavors", price: "£12|15" },
    { title: "Shawarma", content: "Juicy, spiced chicken wrapped with flavorful herbs and seasonings", price: "£9" },
    { title: "Ayamase", content: "A vibrant green pepper stew packed with assorted meats, bursting with bold, spicy flavors", price: "£9|11" },
    { title: "Light Soup & Fufu", content: "Hearty Ghanaian light soup with tender assorted meat or chicken, served with soft fufu. Warm, filling, and full of flavour.", price: "£15" },
    { title: "Waakye", content: "Classic Ghanaian rice and beans cooked with millet leaves, served with your choice of meat. Filling and tasty.", price: "£10|12.5" },
    { title: "Ghanaian Fried Rice", content: "Fried rice cooked with mixed vegetables, spices, and optional hotdogs. Simple, tasty, and well seasoned.", price: "£7.5|10" },
    { title: "Kontomire Stew & Boiled Yam", content: "Spinach stew cooked with spices and fish, served with soft boiled yam. Rich and comforting.", price: "£12|14" },
    { title: "Grilled Tilapia", content: "Fresh tilapia oven-grilled with peppers, onions, and Ghanaian spices. Smoky and well seasoned.", price: "£15" },

    // ---- Chef Special ----
    { title: "Egusi Soup", content: "Thick melon seed soup cooked with assorted meats. Rich, filling, and full of flavour.", price: "£12|15" },
    { title: "Efo Riro", content: "Spinach cooked in rich pepper and tomato sauce with assorted meats. Tasty and comforting.", price: "£9|11" },

    // ---- Sides ----
    { title: "Moi Moi (Side)", content: "Steamed bean pudding made with blended beans, pepper, and spices. Soft and tasty.", price: "£2.5|3.5" },
    { title: "Pounded Yam", content: "Soft and smooth pounded yam. Perfect with any soup.", price: "£2|3" },
    { title: "Eba", content: "Garri made into a soft swallow. Best served with Nigerian soups.", price: "£2|3" },
    { title: "Fried Plantain", content: "Sweet fried plantain. Soft inside and full of flavour.", price: "£2|3.5" },
    { title: "Boiled Egg", content: "Simple boiled egg. Great add-on to any meal.", price: "£1.5" },
    { title: "Fish Roll", content: "Golden pastry filled with seasoned fish. Crispy and tasty.", price: "£3.5" },
    { title: "Sausage Roll", content: "Classic sausage roll with seasoned filling. Soft and filling.", price: "£2.5" },

    // ---- Extras ----
    { title: "Chicken Drumstick", content: "Well seasoned chicken drumstick. Juicy and tasty.", price: "£3.5" },
    { title: "Turkey Wing", content: "Big turkey wing cooked till soft and full of flavour.", price: "£3.5" },
    { title: "Chicken Wings (Extra)", content: "Six juicy wings cooked with Nigerian spices.", price: "£6|8" },
    { title: "Green Sauce", content: "Zesty green sauce. Adds a nice kick to your meal.", price: "75p" },
    { title: "Assorted Meat", content: "Mix of beef, tripe, and other cuts. Perfect with soups.", price: "£6|8" },
    { title: "Egg", content: "Boiled egg. Simple add-on.", price: "£1.5" },
    { title: "Shrimp", content: "Add shrimp to your meal for extra taste.", price: "£1" },
    { title: "Shito", content: "Spicy Ghanaian black pepper sauce. Very hot and tasty.", price: "75p" },

    // ---- Drinks ----
    { title: "Coke", content: "Chilled bottle of Coca-Cola.", price: "£1.5" },
    { title: "Diet Coke", content: "Cold Diet Coke. Light and refreshing.", price: "£1.5" },
    { title: "Fanta / Sprite", content: "Cold soft drink. Sweet and refreshing.", price: "£1.5" },
    { title: "Supermalt", content: "Classic malt drink. Smooth and filling.", price: "£2" },
];

const Shop1 = () => {
    return (
        <div className="shop-section section-padding fix">
        <div className="shop-wrapper style1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp" data-wow-delay=".3s">
                        
                        {/* <div className="main-sidebar">
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Search
                                </h5>
                                <div className="search-widget">
                                    <form action="#"> 
                                        <input type="text" placeholder="Search here" />
                                        <button><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Categories
                                </h5>
                                <ul className="tagcloud">
                                    <li><a href="#">Starters</a></li>
                                    <li><a href="#">Main Course</a></li>
                                    <li><a href="#">Chef Special</a></li>
                                    <li><a href="#">Sides</a></li>
                                    <li><a href="#">Extras</a></li>
                                    <li><a href="#">Drinks</a></li>
                                </ul>
                            </div>
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Filter By Price
                                </h5>
                                <div className="range__barcustom">
                                    <div className="slider">
                                        <div className="progress"></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500" />
                                        <input type="range" className="range-max" min="100" max="10000" value="7500" />
                                    </div>
                                    <div className="range-items">
                                        <div className="price-input">
                                            <div className="price-wrapper d-flex align-items-center gap-1">
                                                <div className="field">
                                                    <span>Price:</span>
                                                </div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-min" value="100" />
                                                </div>
                                                <div className="separators">-</div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-max" value="1000" />
                                                </div>
                                                <a href="#" className="filter-btn mt-2 me-3">Filter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Recent Products
                                </h5>

                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_1.png" alt="img" width={78} height={78}   />
                                    </div>
                                    <div className="recent-content">
                                    <Link href="/shop"> Ruti With Beef Slice </Link>
                                        <div className="star"> <Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">35$</div>
                                            <div className="offer-price">25$</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_2.png" alt="img" width={78} height={78}   />
                                    </div>
                                    <div className="recent-content">
                                        <Link href="/shop"> Fast Food Combo </Link>
                                        <div className="star"><Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">95$</div>
                                            <div className="offer-price">75$</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_3.png" alt="img" width={78} height={78}   />                                       
                                    </div>
                                    <div className="recent-content">
                                    <Link href="/shop"> divicious Salad </Link>
                                        <div className="star"><Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">65$</div>
                                            <div className="offer-price">55$</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_4.png" alt="img" width={78} height={78}   />                                        
                                    </div>
                                    <div className="recent-content">
                                    <Link href="/shop"> Chiness Pasta </Link>
                                        <div className="star"><Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">45$</div>
                                            <div className="offer-price">35$</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div className="col-12 order-1 order-md-2 wow fadeInUp" data-wow-delay=".5s">
                        {/* <div className="sort-bar">
                            <div className="row g-sm-0 gy-20 justify-content-between align-items-center">
                                <div className="col-md">
                                    <p className="woocommerce-result-count">
                                        Showing {menuItems.length} Results
                                    </p>
                                </div>

                                <div className="col-md-auto">
                                    <form className="woocommerce-ordering" method="get">
                                        <select name="orderby" className="single-select" aria-label="Shop order">
                                            <option  >Default Sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="col-md-auto">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-grid-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-grid" type="button" role="tab"
                                                aria-controls="pills-grid" aria-selected="true"><i
                                                    className="fa-solid fa-grid"></i></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-list-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-list" type="button" role="tab"
                                                aria-controls="pills-list" aria-selected="false"><i
                                                    className="fa-solid fa-list"></i></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-grid" role="tabpanel"
                                aria-labelledby="pills-grid-tab" tabIndex="0">
                                <div className="dishes-card-wrap style2">
                                    {menuItems.map((item, index) => (
                                        <ShopCard
                                            key={item.title}
                                           img={`/assets/img/dishes/dishes2_${index + 1}.png`}
                                            title={item.title}
                                            content={item.content}
                                            price={item.price}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>


                        {/* <div className="page-nav-wrap text-center">
                            <ul>
                                <li><a className="previous" href="#"><i className="bi bi-arrow-left"></i></a></li>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers active" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">...</a></li>
                                <li><a className="next" href="#"><i className="bi bi-arrow-right"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Shop1;
