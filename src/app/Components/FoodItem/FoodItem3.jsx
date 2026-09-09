"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FoodItem3 = () => {

    const [isActive, setIsActive] = useState('tab1');

    return (
        <section className="food-menu-section fix">
            <div className="food-menu-wrapper style3">
                <div className="container">
                    <div className="food-menu-tab-wrapper style3 section-padding bg-white rounded-5">
                        <div className="shape1 d-none d-xl-block"><Image className="float-bob-x" src="/assets/img/shape/foodmenuShape3_1.png" alt="img" width={137} height={158} /></div>
                        <div className="shape2 d-none d-xl-block"><Image className="float-bob-y" src="/assets/img/shape/foodmenuShape3_2.png" alt="img" width={125} height={106} /></div>
                        <div className="shape3 d-none d-xl-block"><Image className="float-bob-y" src="/assets/img/shape/foodmenuShape3_3.png" alt="img" width={131} height={172} /></div>
                        <div className="title-area">
                            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                                DELICIOUS DISHES <Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                            </div>
                            <p className="text-center wow fadeInUp" data-wow-delay="0.7s">
                                Two prices listed denote Regular and Large portions. Regular is served in a 700ml container, Large in a 1200ml container
                            </p>
                        </div>


                        <div className="food-menu-tab style2">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className={`nav-item ${isActive === 'tab1' ? 'active' : ''}`} onClick={() => setIsActive('tab1')} role="presentation">
                                    <button className="nav-link" id="pills-Breakfast-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Breakfast" type="button" role="tab"
                                        aria-controls="pills-Breakfast" aria-selected="true">Staters</button>
                                </li>
                                <li className={`nav-item ${isActive === 'tab2' ? 'active' : ''}`} onClick={() => setIsActive('tab2')} role="presentation">
                                    <button className="nav-link" id="pills-Lunch-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Lunch" type="button" role="tab" aria-controls="pills-Lunch"
                                        aria-selected="false">Main Course</button>
                                </li>
                                <li className={`nav-item ${isActive === 'tab3' ? 'active' : ''}`} onClick={() => setIsActive('tab3')} role="presentation">
                                    <button className="nav-link" id="pills-Dinner-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Dinner" type="button" role="tab" aria-controls="pills-Dinner"
                                        aria-selected="false">Chef Special</button>
                                </li>
                                <li className={`nav-item ${isActive === 'tab4' ? 'active' : ''}`} onClick={() => setIsActive('tab4')} role="presentation">
                                    <button className="nav-link" id="pills-Dessert-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Dessert" type="button" role="tab"
                                        aria-controls="pills-Dessert" aria-selected="false">Dessert</button>
                                </li>
                                <li className={`nav-item ${isActive === 'tab5' ? 'active' : ''}`} onClick={() => setIsActive('tab5')} role="presentation">
                                    <button className="nav-link" id="pills-Drink-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Drink" type="button" role="tab" aria-controls="pills-Drink"
                                        aria-selected="false">Sides</button>
                                </li>
                                <li className={`nav-item ${isActive === 'tab6' ? 'active' : ''}`} onClick={() => setIsActive('tab6')} role="presentation">
                                    <button className="nav-link" id="pills-Snack-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Snack" type="button" role="tab" aria-controls="pills-Snack"
                                        aria-selected="false">Extras</button>
                                </li>
                                <li className={`nav-item ${isActive === 'tab7' ? 'active' : ''}`} onClick={() => setIsActive('tab7')} role="presentation">
                                    <button className="nav-link" id="pills-Suops-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-Suops" type="button" role="tab" aria-controls="pills-Suops"
                                        aria-selected="false">Drinks</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className={`tab-pane ${isActive === 'tab1' ? 'active' : ''}`} id="pills-Breakfast" role="tabpanel"
                                    aria-labelledby="pills-Breakfast-tab" tabIndex="0">
                                    <div className="row gx-60">
                                        <div className="col-lg-6">
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3 className="active">Moi Moi</h3>
                                                        </Link>
                                                        <p>Nigerian delicacy made from blended beans, peppers,
                                                            onions, and spices. Soft, savory, and rich in flavor</p>
                                                    </div>
                                                </div>

                                                <h6>£4</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Chicken/Beef Kebab</h3>
                                                        </Link>
                                                        <p>Juicy chicken pieces or beef grilled on a skewer
                                                            with colorful peppers and onions. Packed with flavor</p>
                                                    </div>
                                                </div>

                                                <h6>£6</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Gizzdodo</h3>
                                                        </Link>
                                                        <p>Spicy chicken gizzards tossed with sweet, fried plantains for a perfect mix of heat and sweetness</p>
                                                    </div>
                                                </div>

                                                <h6>£6|8</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Chicken Wings</h3>
                                                        </Link>
                                                        <p>Six juicy wings cooked with bold West African seasonings for a spicy, flavorful kick</p>
                                                    </div>
                                                </div>

                                                <h6>£5.5</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Asun</h3>
                                                        </Link>
                                                        <p>Tender, smoky goat meat grilled with a spicy kick</p>
                                                    </div>
                                                </div>

                                                <h6>£6|8</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Chofi</h3>
                                                        </Link>
                                                        <p>Tender turkey tail grilled to perfection with bold spices. Smoky, flavorful, and indulgent.</p>
                                                    </div>
                                                </div>

                                                <h6>£2</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Kelewele</h3>
                                                        </Link>
                                                        <p>Spicy Ghanaian fried plantains tossed in ginger, garlic, and chili. Sweet, savory, and full of flavor. </p>
                                                    </div>
                                                </div>

                                                <h6>£3.5</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Fried Yam</h3>
                                                        </Link>
                                                        <p>Fried yam with green sauce and shito. Crispy, spicy, and full of flavor.</p>
                                                    </div>
                                                </div>

                                                <h6>£3|5</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Chicken Special</h3>
                                                        </Link>
                                                        <p>Tender chicken thighs & drumsticks cooked withsweet peppers, onions, scotch bonnet, and herbs, then roasted to perfection.</p>
                                                    </div>
                                                </div>

                                                <h6>£10|13</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Red Red</h3>
                                                        </Link>
                                                        <p>Hearty Ghanaian red beans cooked in palm oil with spices and seasonings.</p>
                                                    </div>
                                                </div>

                                                <h6>£5|7</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'tab2' ? 'active' : ''}`} id="pills-Lunch" role="tabpanel"
                                    aria-labelledby="pills-Lunch-tab" tabIndex="0">
                                    <div className="row gx-30">
                                        <div className="col-lg-6">
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Jollof Rice</h3>
                                                        </Link>
                                                        <p>Fluffy, flavorful West African Jollof rice served with your choice of tender chicken drumstick or turkey thigh</p>
                                                    </div>
                                                </div>

                                                <h6>£6|8</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Fried Rice</h3>
                                                        </Link>
                                                        <p>Savory fried rice loaded with veggies and spices, served with your choice of juicy chicken drumstickor turkey thigh</p>
                                                    </div>
                                                </div>

                                                <h6>£6|8</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Half & Half Rice Box</h3>
                                                        </Link>
                                                        <p>Half Jollof and half Fried rice together with yourchoice of juicy chicken drumstick or turkey thigh</p>
                                                    </div>
                                                </div>

                                                <h6>£6.5|8.5</h6>
                                            </div>

                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Assorted Meat Stew</h3>
                                                        </Link>
                                                        <p>Rich tomato stew with assorted meats, full of bold, savory flavors</p>
                                                    </div>
                                                </div>

                                                <h6>£12|15</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Shawarma</h3>
                                                        </Link>
                                                        <p>Juicy, spiced chicken wrapped with flavorful herbs and seasonings</p>
                                                    </div>
                                                </div>

                                                <h6>£9</h6>
                                            </div>
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Ayamase</h3>
                                                        </Link>
                                                        <p>A vibrant green pepper stew packed with assortedmeats, bursting with bold, spicy flavors</p>
                                                    </div>
                                                </div>

                                                <h6>£9|11</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Light Soup & Fufu</h3>
                                                        </Link>
                                                        <p>Hearty Ghanaian light soup with tender assorted meat or chicken, served with soft fufu. Warm, filling, and full of flavour.</p>
                                                    </div>
                                                </div>
                                                <h6>£15</h6>
                                            </div>

                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Waakye</h3>
                                                        </Link>
                                                        <p>Classic Ghanaian rice and beans cooked with millet leaves, served with your choice of meat. Filling and tasty.</p>
                                                    </div>
                                                </div>
                                                <h6>£10|£12.5</h6>
                                            </div>

                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Ghanaian Fried Rice</h3>
                                                        </Link>
                                                        <p>Fried rice cooked with mixed vegetables, spices, and optional hotdogs. Simple, tasty, and well seasoned.</p>
                                                    </div>
                                                </div>
                                                <h6>£7.5|£10</h6>
                                            </div>

                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Kontomire Stew & Boiled Yam</h3>
                                                        </Link>
                                                        <p>Spinach stew cooked with spices and fish, served with soft boiled yam. Rich and comforting.</p>
                                                    </div>
                                                </div>
                                                <h6>£12|£14</h6>
                                            </div>

                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Grilled Tilapia</h3>
                                                        </Link>
                                                        <p>Fresh tilapia oven-grilled with peppers, onions, and Ghanaian spices. Smoky and well seasoned.</p>
                                                    </div>
                                                </div>
                                                <h6>£15</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'tab3' ? 'active' : ''}`} id="pills-Dinner" role="tabpanel"
                                    aria-labelledby="pills-Dinner-tab" tabIndex="0">
                                    <div className="row gx-30">
                                        <div className="col-lg-6">
                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Egusi Soup</h3>
                                                        </Link>
                                                        <p>Thick melon seed soup cooked with assorted meats. Rich, filling, and full of flavour.</p>
                                                    </div>
                                                </div>
                                                <h6>£12|£15</h6>
                                            </div>

                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Efo Riro</h3>
                                                        </Link>
                                                        <p>Spinach cooked in rich pepper and tomato sauce with assorted meats. Tasty and comforting.</p>
                                                    </div>
                                                </div>
                                                <h6>£9|£11</h6>
                                            </div>

                                            <div className="single-menu-items">
                                                <div className="details">
                                                    <div className="menu-content">
                                                        <Link href="/menu">
                                                            <h3>Grilled Tilapia</h3>
                                                        </Link>
                                                        <p>Fresh tilapia oven-grilled with peppers, onions, and Nigerian spices. Smoky and well seasoned.</p>
                                                    </div>
                                                </div>
                                                <h6>£15</h6>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div> */}
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'tab4' ? 'active' : ''}`} id="pills-Dessert" role="tabpanel"
                                    aria-labelledby="pills-Dessert-tab" tabIndex="0">
                                    {/* <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>

                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>                                        
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link href="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div> */}
                                </div>
                                <div className={`tab-pane ${isActive === 'tab5' ? 'active' : ''}`} id="pills-Drink" role="tabpanel"
                                    aria-labelledby="pills-Drink-tab" tabIndex="0">
                                    <div className="row gx-30">
                                            <div className="col-lg-6">
                                                <div className="single-menu-items">
                                                    <div className="details">
                                                        <div className="menu-content">
                                                            <Link href="/menu">
                                                                <h3>Moi Moi</h3>
                                                            </Link>
                                                            <p>Steamed bean pudding made with blended beans, pepper, and spices. Soft and tasty.</p>
                                                        </div>
                                                    </div>
                                                    <h6>£2.5|£3.5</h6>
                                                </div>

                                                <div className="single-menu-items">
                                                    <div className="details">
                                                        <div className="menu-content">
                                                            <Link href="/menu">
                                                                <h3>Pounded Yam</h3>
                                                            </Link>
                                                            <p>Soft and smooth pounded yam. Perfect with any soup.</p>
                                                        </div>
                                                    </div>
                                                    <h6>£2|£3</h6>
                                                </div>

                                                <div className="single-menu-items">
                                                    <div className="details">
                                                        <div className="menu-content">
                                                            <Link href="/menu">
                                                                <h3>Eba</h3>
                                                            </Link>
                                                            <p>Garri made into a soft swallow. Best served with Nigerian soups.</p>
                                                        </div>
                                                    </div>
                                                    <h6>£2|£3</h6>
                                                </div>

                                                <div className="single-menu-items">
                                                    <div className="details">
                                                        <div className="menu-content">
                                                            <Link href="/menu">
                                                                <h3>Fried Plantain</h3>
                                                            </Link>
                                                            <p>Sweet fried plantain. Soft inside and full of flavour.</p>
                                                        </div>
                                                    </div>
                                                    <h6>£2|£3.5</h6>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="single-menu-items">
                                                    <div className="details">
                                                        <div className="menu-content">
                                                            <Link href="/menu">
                                                                <h3>Boiled Egg</h3>
                                                            </Link>
                                                            <p>Simple boiled egg. Great add-on to any meal.</p>
                                                        </div>
                                                    </div>
                                                    <h6>£1.5</h6>
                                                </div>

                                                <div className="single-menu-items">
                                                    <div className="details">
                                                        <div className="menu-content">
                                                            <Link href="/menu">
                                                                <h3>Fish Roll</h3>
                                                            </Link>
                                                            <p>Golden pastry filled with seasoned fish. Crispy and tasty.</p>
                                                        </div>
                                                    </div>
                                                    <h6>£3.5</h6>
                                                </div>

                                                <div className="single-menu-items">
                                                    <div className="details">
                                                        <div className="menu-content">
                                                            <Link href="/menu">
                                                                <h3>Sausage Roll</h3>
                                                            </Link>
                                                            <p>Classic sausage roll with seasoned filling. Soft and filling.</p>
                                                        </div>
                                                    </div>
                                                    <h6>£2.5</h6>
                                                </div>
                                            </div>

                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'tab6' ? 'active' : ''}`} id="pills-Snack" role="tabpanel"
                                    aria-labelledby="pills-Snack-tab" tabIndex="0">
                                    <div className="row gx-30">
<div className="col-lg-6">
        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Chicken Drumstick</h3>
                    </Link>
                    <p>Well seasoned chicken drumstick. Juicy and tasty.</p>
                </div>
            </div>
            <h6>£3.5</h6>
        </div>

        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Turkey Wing</h3>
                    </Link>
                    <p>Big turkey wing cooked till soft and full of flavour.</p>
                </div>
            </div>
            <h6>£3.5</h6>
        </div>

        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Chicken Wings</h3>
                    </Link>
                    <p>Six juicy wings cooked with Nigerian spices.</p>
                </div>
            </div>
            <h6>£6|£8</h6>
        </div>
                <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Green Sauce</h3>
                    </Link>
                    <p>Zesty green sauce. Adds a nice kick to your meal.</p>
                </div>
            </div>
            <h6>75p</h6>
        </div>
    </div>

    

    <div className="col-lg-6">
        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Assorted Meat</h3>
                    </Link>
                    <p>Mix of beef, tripe, and other cuts. Perfect with soups.</p>
                </div>
            </div>
            <h6>£6|£8</h6>
        </div>

        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Egg</h3>
                    </Link>
                    <p>Boiled egg. Simple add-on.</p>
                </div>
            </div>
            <h6>£1.5</h6>
        </div>

        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Shrimp</h3>
                    </Link>
                    <p>Add shrimp to your meal for extra taste.</p>
                </div>
            </div>
            <h6>£1</h6>
        </div>
                <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Shito</h3>
                    </Link>
                    <p>Spicy Ghanaian black pepper sauce. Very hot and tasty.</p>
                </div>
            </div>
            <h6>75p</h6>
        </div>
    </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'tab7' ? 'active' : ''}`} id="pills-Suops" role="tabpanel"
                                    aria-labelledby="pills-Suops-tab" tabIndex="0">
                                    <div className="row gx-30">
    <div className="col-lg-6">
        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Coke</h3>
                    </Link>
                    <p>Chilled bottle of Coca-Cola.</p>
                </div>
            </div>
            <h6>£1.5</h6>
        </div>

        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Diet Coke</h3>
                    </Link>
                    <p>Cold Diet Coke. Light and refreshing.</p>
                </div>
            </div>
            <h6>£1.5</h6>
        </div>
    </div>

    <div className="col-lg-6">
        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Fanta / Sprite</h3>
                    </Link>
                    <p>Cold soft drink. Sweet and refreshing.</p>
                </div>
            </div>
            <h6>£1.5</h6>
        </div>

        <div className="single-menu-items">
            <div className="details">
                <div className="menu-content">
                    <Link href="/menu">
                        <h3>Supermalt</h3>
                    </Link>
                    <p>Classic malt drink. Smooth and filling.</p>
                </div>
            </div>
            <h6>£2</h6>
        </div>
    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="marquee-wrapper style-1 section-padding mt-1">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item style1">
    <span className="text-slider"></span><span className="text-slider text-style">Jollof Rice</span>
    <span className="text-slider"></span><span className="text-slider text-style">Egusi Soup</span>
    <span className="text-slider"></span><span className="text-slider text-style">Efo Riro</span>
    <span className="text-slider"></span><span className="text-slider text-style">Light Soup & Fufu</span>
    <span className="text-slider"></span><span className="text-slider text-style">Waakye</span>
    <span className="text-slider"></span><span className="text-slider text-style">Grilled Tilapia</span>
    <span className="text-slider"></span><span className="text-slider text-style">Brown Stew Chicken</span>
    <span className="text-slider"></span><span className="text-slider text-style">Fried Plantain</span>
    <span className="text-slider"></span><span className="text-slider text-style">Kontomire Stew</span>
    <span className="text-slider"></span><span className="text-slider text-style">Curry Goat</span>
    <span className="text-slider"></span><span className="text-slider text-style">Gizzdodo</span>
    <span className="text-slider"></span><span className="text-slider text-style">Jerk Chicken</span>
    <span className="text-slider"></span><span className="text-slider text-style">Rice & Peas</span>
    <span className="text-slider"></span><span className="text-slider text-style">Red Red</span>
</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FoodItem3;