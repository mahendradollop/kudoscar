export default function Benefits(props) {
    return (
        // <!-- WHAT BENEFIT YOU GET SECTION  -->
        <section className="bg-dark benefit_you">
            <div className="container text-center">
                <h3 className="section_main_heading text-white text-center position-relative d-inline-block">What Benefits you <span
                    className="primary font-600">Get</span> </h3>
                <div className="benefit_card_box">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="signle_benefit_card text-start">
                                <span className="card_image d-flex align-items-center justify-content-center position-relative"><span
                                    className="icon-low-cost card_icon"></span></span>
                                <h4 className="card_title_main font-20 font-500 text-white b-inline-block mb-2">Low Cost Travelling</h4>
                                <p className=" text-white font-14">No matter where you’re going, by bus or <br className="d-none d-md-block" />
                                    carpool, find the perfect ride from our<br className="d-none d-md-block" />
                                    wide range of destinations and routes<br className="d-none d-md-block" />
                                    at low prices.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="signle_benefit_card text-start">
                                <span
                                    className="card_image d-flex align-items-center justify-content-center position-relative insta_booking"><span
                                        className="icon-instant_booking card_icon"></span></span>
                                <h4 className="card_title_main font-20 font-500 text-white b-inline-block mb-2">Instant Bookings</h4>
                                <p className=" text-white font-14">Booking a ride has never been easier! <br className="d-none d-md-block" />
                                    Thanks to our simple app powered by<br className="d-none d-md-block" />
                                    great technology, you can book a ride<br className="d-none d-md-block" />
                                    close to you in just minutes.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="signle_benefit_card text-start">
                                <span
                                    className="card_image d-flex align-items-center justify-content-center position-relative publish_earn"><span
                                        className="icon-publish-and-earn card_icon"></span></span>
                                <h4 className="card_title_main font-20 font-500 text-white b-inline-block mb-2">Publish and Earn</h4>
                                <p className=" text-white font-14">You can publish your rides and earn money<br className="d-none d-md-block" />
                                    easily by drop-off the peoples at there<br className="d-none d-md-block" />
                                    places and also enjoy the ride by going<br className="d-none d-md-block" />
                                    with stranagers</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="signle_benefit_card text-start">
                                <span
                                    className="card_image d-flex align-items-center justify-content-center position-relative trustable_plateform"><span
                                        className="icon-secure card_icon"></span></span>
                                <h4 className="card_title_main font-20 font-500 text-white b-inline-block mb-2">Trustable Platform</h4>
                                <p className=" text-white font-14">We take the time to get to know each of <br className="d-none d-md-block" />
                                    our members and bus partners. We<br className="d-none d-md-block" />
                                    check reviews, profiles and IDs, so you<br className="d-none d-md-block" />
                                    know who you’re travelling with.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}