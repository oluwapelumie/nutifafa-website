"use client"
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

const Testimonial3 = () => {

     const settings = {
                dots: false,
                infinite: true,
                speed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                swipeToSlide: true,
                autoplay: false,
                autoplaySpeed: 4000,        
                responsive: [
                  {
                    breakpoint: 1399,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 1199,
                    settings: {
                      slidesToShow: 1,
                    }
                  },{
                    breakpoint: 575,
                    settings: {
                      slidesToShow: 1,
                    }
                  }
                ]
              }; 
        
              const sliderRef = useRef(null);
        
              const next = () => {
                sliderRef.current.slickNext();
              };
            
              const previous = () => {
                sliderRef.current.slickPrev();
              }; 
    
              const tesItems = [
                {title:'Sarah M.', designation:'Regular Customer', content:'The jollof rice tastes just like home. Perfectly spiced and the chicken was so tender. Will be ordering again.'},
                {title:'Kwame A.', designation:'Regular Customer', content:'Best waakye I have had outside Ghana. Generous portions and the flavour was spot on.'},
                {title:'Funmi O.', designation:'Regular Customer', content:'Ordered the egusi soup with fufu for a family dinner. Everyone cleared their plate, no leftovers at all.'},
                {title:'David T.', designation:'First-time Customer', content:'Tried the suya wings on a friend\u2019s recommendation. Smoky, spicy, exactly what I was hoping for.'},
              ];              

    return (
        <div className="testimonial-section section-padding pb-0 fix">
        <div className="testi-shape">
        <Image src="/assets/img/testimonial/testi-shape.png" alt="img" width={277} height={288}   />
        </div>
        <div className="testimonial-wrapper style3">
            <div className="container">
                <div className="title-area">
                    <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                    <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                        Testimonials<Image className="ms-1"
                            src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                        What Clients Say About Us
                    </h2>
                </div>

                <div className="slider-area">
                    <div className="swiper testmonialSliderThree">
                        <div className="swiper-wrapper cs_slider_gap_301">
                        <Slider ref={sliderRef} {...settings}>
                        {tesItems.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="testimonial-card style3">
                                    <div className="testimonial-body">
                                        <div className="icon"><Image src="/assets/img/icon/star2.svg" alt="img" width={86} height={16}   /></div>

                                        <p>{item.content}</p>

                                        <div className="fancy-box">
                                            <div className="item2">
                                                <h6>{item.title}</h6>
                                                <p>{item.designation}</p>
                                            </div>
                                            <div className="quote"><Image src="/assets/img/icon/quote.svg" alt="img" width={50} height={37}   /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                ))}
                                </Slider>

                        </div>
                    </div>
                </div>

                <div className="btn-wrap">
                <div onClick={previous} className="arrow-prev"><i className="bi bi-arrow-left"></i></div>
                <div onClick={next} className="arrow-next"><i className="bi bi-arrow-right"></i></div>
                
                </div>

            </div>
             <div style={{ height: "80px" }}></div>
        </div>

       
    </div>

    );
};

export default Testimonial3;
