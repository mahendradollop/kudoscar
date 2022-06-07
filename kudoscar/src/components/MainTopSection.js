export default function MainToSection(props) {
    return (
        <div className="main_top_section">
            <div className="container">
                <div className="quick_ride">

                    <h1 className="header_title text-center font-600 dark">Share the cost and <span
                        className="primary dashed_underline">save</span> the environment</h1>
                    <p className="header_detail mb-0 secondary text-center font-16 font-500">You can publish or join a ride to <br
                        className="d-none d-md-block" />
                        start carpooling!</p>
                    <div className="quick_ride_tabs position-relative">
                        <img src="assets/images/header_left.svg" className="header_left" alt="" />
                        <img src="assets/images/header_right.svg" className="header_right" alt="" />

                        {/* <!-- QUICK BOOKING TABS  --> */}
                        <ul className="nav nav-pills mb-3 ride_tab justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active font-500" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <span className="icon_outer d-flex align-items-center justify-content-center mx-auto"><span
                                        className="icon-tab_search tab_icon regular_icon"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span className="path4"></span></span> <span
                                                className="icon-search_active tab_icon active_icon"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span></span> </span>
                                    Search Ride</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link font-500" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                    aria-selected="false">
                                    <span className="icon_outer d-flex align-items-center justify-content-center mx-auto">
                                        <img src="assets/images/svg_icon/publish-ride.svg" className="img-fluid default" />
                                        <img src="assets/images/svg_icon/publish-ride-h.svg" className="img-fluid hover" />
                                    </span>
                                    <span className="path6"></span><span className="path7"></span> Publish Ride</button>
                            </li>
                        </ul>
                        <div className="tab-content ride_tab_content" id="pills-tabContent">
                            <div className="tab-pane  fade show active position-relative" id="pills-home" role="tabpanel"
                                aria-labelledby="pills-home-tab">
                                <div className="common_search_ride">
                                    <img src="assets/images/svg_icon/group_circle.svg" className="tabs_imgs img-fluid" alt="" />
                                    <form action="#" className=" w-100">
                                        <div className="search_ride_box d-flex">
                                            <div className="single_search_item position-relative">
                                                <label
                                                    className="font-16 font-500 search_item_title position-relative d-inline-flex align-items-center">Leaving
                                                    From</label>
                                                <input type="text" className="form-control d-inline-flex align-items-center"
                                                    placeholder="Your Start Point" />
                                                <span className="exchange d-inline-flex align-items-center justify-content-center" ><img
                                                    src="assets/images/svg_icon/exchange.svg" className="img-fluid" alt="" /></span>
                                            </div>
                                            <div className="single_search_item">
                                                <label
                                                    className="font-16 font-500 search_item_title goin_to  position-relative d-inline-flex align-items-center">Going
                                                    To</label>
                                                <input type="text" className="form-control d-inline-flex align-items-center"
                                                    placeholder="Your Destination" />
                                            </div>
                                            <div className="single_search_item">
                                                <label
                                                    className="font-16 font-500 search_item_title datetime position-relative d-inline-flex align-items-center">When
                                                    are you going?</label>
                                                <input type="datetime-local" className="form-control d-inline-flex align-items-center"
                                                    placeholder="Date & Time of ride" />
                                            </div>
                                            <div className="single_search_item">
                                                <label
                                                    className="font-16 font-500 search_item_title seats position-relative d-inline-flex align-items-center">How
                                                    many seats?</label>
                                                <div className="qty position-relative d-inline-flex align-items-center">
                                                    <span className="minus bg-primary d-flex align-items-center justify-content-center pb-1">-</span>
                                                    <input type="number" className="count form-control seats_number" name="qty" value="1" />
                                                    <span className="plus bg-primary d-flex align-items-center justify-content-center">+</span>
                                                </div>
                                            </div>
                                            <div className="single_search_item position-relative mt-auto">
                                                <label className="font-16 font-500 position-relative d-inline-flex align-items-center"></label>
                                                <button className="btn btn-dark w-100">Find Rides <span
                                                    className="icon-arrow ms-2 search_arrow font-14"></span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- tabs 2 --> */}
                            <div className="tab-pane fade position-relative" id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab">
                                <div className="common_search_ride">
                                    <img src="assets/images/svg_icon/group_circle.svg" className="tabs_imgs img-fluid" alt="" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a href="publish_ride.html" className="publish_ride-item d-inline-flex flex-wrap w-100 position-relative align-items-center">
                                                <span className="pr_item_icon">
                                                    <img src="assets/images/svg_icon/startup.svg" className="deafult" />
                                                </span>
                                                <h5 className="m-0 font-500">Publish a Ride</h5>
                                                <p className="m-0 font-14 font-500">Publish a ride and invite peoples for<br
                                                    className="d-none d-md-block" />
                                                    car pooling</p>
                                                <span className="material-symbols-outlined ride_right_arrow dark">
                                                    arrow_forward_ios
                                                </span>
                                            </a>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="publish_ride-item d-inline-flex flex-wrap w-100 position-relative align-items-center">
                                                <span className="pr_item_icon">
                                                    <img src="assets/images/svg_icon/publish-request.svg" className="deafult" />
                                                </span>
                                                <h5 className="m-0 font-500">Publish a Request</h5>
                                                <p className="m-0 font-14 font-500">Publish a Request to join ongoing
                                                    <br className="d-none d-md-block" />
                                                    rides
                                                </p>
                                                <span className="material-symbols-outlined ride_right_arrow">
                                                    arrow_forward_ios
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* QUICK BOOKING TABS END  */}

                    </div>
                </div>
            </div>
        </div>
    )
}