
export default function DownloadApp(props) {
    return (
        <section className="download_app bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3 className="section_main_heading app_download text-white  position-relative d-inline-block">Download the <span
                            className="primary font-600">App</span> </h3>
                        <p className="section_details font-14 text-white font-400">Get the free mobile App of KudosCar from play store or
                            app store <br className="d-none d-md-block"/>
                                and book your ride from anywehre.
                        </p>
                        <div className="app_download">
                            <a href="javascript:void(0);" className=""><img src="assets/images/app-store-badge.png"
                                className="img-fluid store_icon" alt=""/></a>
                            <a href="javascript:void(0);"><img src="assets/images/google-play-badge.png" className="img-fluid store_icon "
                                alt=""/></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/images/mockup_mobile.png" className=" img-fluid mobile_mockup" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}