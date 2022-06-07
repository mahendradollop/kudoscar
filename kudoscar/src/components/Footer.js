
export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_links_box">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer_about">
                                <h3 className="footer_heading">Kudos<span className="primary font-700">Car</span></h3>
                                <p className="font-14 font-400 footer_description">We take the time to get to know each of <br
                                    className="d-none d-md-block"/>
                                    our members and bus partners. We<br className="d-none d-md-block"/>
                                        check reviews, profiles and IDs, so you<br className="d-none d-md-block"/>
                                            know who you’re travelling with.</p>
                                        <a href="javascript:void(0);"
                                            className="d-flex align-items-center text-decoration-none primary font-16 font-500">Read More <span
                                                className="material-symbols-outlined primary font-16">
                                                double_arrow
                                            </span></a>
                                    </div>
                                </div>
                                    <div className="col-md-3">
                                        <h4 className="footer_links_title font-18 font-500 position-relative">Quick Links</h4>
                                        <ul className="footer_links_list mb-0">
                                            <li><a href="javascript:void(0);"
                                                className="text-decoration-none font-14 font-500 d-flex align-items-center"><span
                                                    className="icon-Path-56 footer_link_icon"></span> Home</a></li>
                                            <li><a href="javascript:void(0);"
                                                className="text-decoration-none font-14 font-500 d-flex align-items-center"><span
                                                    className="icon-Path-56 footer_link_icon"></span> About Kudos</a></li>
                                            <li><a href="javascript:void(0);"
                                                className="text-decoration-none font-14 font-500 d-flex align-items-center"><span
                                                    className="icon-Path-56 footer_link_icon"></span> Faq’s</a></li>
                                            <li><a href="javascript:void(0);"
                                                className="text-decoration-none font-14 font-500 d-flex align-items-center"><span
                                                    className="icon-Path-56 footer_link_icon"></span> Help Center</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h4 className="footer_links_title font-18 font-500 more position-relative">More</h4>
                                        <ul className="footer_links_list mb-0">
                                            <li><a href="javascript:void(0);"
                                                className="text-decoration-none font-14 font-500 d-flex align-items-center"><span
                                                    className="icon-Path-56 footer_link_icon"></span> Terms of services</a></li>
                                            <li><a href="javascript:void(0);"
                                                className="text-decoration-none font-14 font-500 d-flex align-items-center"><span
                                                    className="icon-Path-56 footer_link_icon"></span> Privacy</a></li>
                                            <li><a href="javascript:void(0);"
                                                className="text-decoration-none font-14 font-500 d-flex align-items-center"><span
                                                    className="icon-Path-56 footer_link_icon"></span> Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h4 className="footer_links_title font-18 font-500 more position-relative">Contact Us</h4>
                                        <ul className="footer_links_list mb-0">
                                            <li className="d-flex align-items-center"><span
                                                className="contact_icon d-flex align-items-center justify-content-center"><span
                                                    className="icon-Path-13"></span></span>
                                                <p className="font-14 font-500 mb-0">KudosCar 185 Street-1, Texas <br className="d-none d-md-block"/>CO 230256
                                                </p>
                                            </li>
                                            <li className="d-flex align-items-center"><span
                                                className="contact_icon d-flex align-items-center justify-content-center"><span
                                                    className="icon-Path-9"></span></span>
                                                <p className="font-14 font-500 mb-0">1-11563-GO-KudosCar<br className="d-none d-md-block"/> (1-7751-002-0002)</p>
                                            </li>
                                            <li className="d-flex align-items-center"><span
                                                className="contact_icon d-flex align-items-center justify-content-center"><span
                                                    className="icon-Path-11"></span></span><a href="mailto:info@KudosCar.com"
                                                        className="font-14 font-500 text-decoration-none">info@KudosCar.com</a> </li>
                                            <li><span className="dashed_line"></span></li>
                                            <li className="d-flex align-items-center">
                                                <a href="javascript:void(0);" className="text-decoration-none"><span
                                                    className="footer_social_icon d-flex align-items-center justify-content-center bg-primary"><img
                                                        src="assets/images/svg_icon/facebook.svg" alt=""/></span></a>
                                                <a href="javascript:void(0);" className="text-decoration-none"><span
                                                    className="footer_social_icon d-flex align-items-center justify-content-center"><span
                                                        className="icon-Path-76"></span></span></a>
                                                <a href="javascript:void(0);" className="text-decoration-none"><span
                                                    className="footer_social_icon d-flex align-items-center justify-content-center"><span
                                                        className="icon-twitter"></span></span></a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="copyright text-center">
                            <p className="mb-0 font-14 font-500"><span className="me-1 font-500">&#169;</span> 2020. KudosCar. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
                )
}