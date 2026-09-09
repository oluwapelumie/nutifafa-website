import Image from "next/image";

const Contact3 = () => {
    return (
        <div>
<div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style1">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"> <Image src="/assets/img/icon/location.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Our Address</h3>
                            <p>Coventry</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><Image src="/assets/img/icon/gmail.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">info@nutifafa.com</h3>
                            <p>Email us anytime for any kind of inquiry.</p>      
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><Image src="/assets/img/icon/phone.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Hot: +44747331493</h3>
                            <p>24/7/365 priority Live Chat and ticketing support.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><Image src="/assets/img/icon/clock.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Opening Hour</h3>
                            <p>Monday -Sun 8am - 10pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-form-section section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
            <div className="container">
                <div className="row gx-60 gy-5">
                    <div className="col-xl-6">
                        <div className="contact-form-thumb">
                        <Image src="/assets/img/contact/contactThumb2_1.png" alt="img" width={933} height={634}   />
                         
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-form style2">
                            <h2>Get in Touch</h2>
                            <form className="row" action="#">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-md-6">
                                    <input type="number" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-6">
                                    <select name="orderby" className="single-select" aria-label="Shop order">
                                        <option value="subject">Subject</option>
                                        <option value="complain">Complain</option>
                                        <option value="greetings">Greetings</option>
                                        <option value="date">Expire Date</option>
                                        <option value="price">About Price</option>
                                        <option value="order">About order</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea id="message" className="form-control" placeholder="Write your message here..."
                                        rows="5"></textarea>
                                </div>
                                <div className="col-12 form-group">
                                    <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                    <label htmlFor="reviewcheck">Collaboratively formulate principle capital. Progressively
                                        evolve user<span className="checkmark"></span></label>
                                </div>
                                <div className="col-12 form-group mb-0">
                                    <button className="theme-btn w-100">SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="map-wrapper contact-area-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77875.61282299538!2d-1.51491805!3d52.41369155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151656e22b7%3A0x4f660f5564f0689!2sCoventry!5e0!3m2!1sen!2suk!4v1777469782607!5m2!1sen!2suk"
            height="550" loading="lazy"
            ></iframe>
    </div>            
        </div>
    );
};

export default Contact3;