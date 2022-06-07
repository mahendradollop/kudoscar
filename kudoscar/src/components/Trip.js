export default function Trip(props) {
    return (

        <div className="col-md-4">
            <div className="single_recent_ride_card">
                <div className="ride_start_box d-flex mb-4">
                    <span className="start_time font-12 font-500 secondary">04:00 pm</span>
                    <h6 className="stat_place font-14 font-500 d-inline-block position-relative d-flex align-items-center me-1">
                        Bhopal, MP</h6><img src="assets/images/svg_icon/middle.svg" className="img-fluid ms-auto" alt="" />
                </div>
                <div className="ride_end_box d-flex">
                    <span className="start_end font-12 font-500 secondary">04:00 pm</span>
                    <h6 className="end_place font-14 font-500 d-inline-block position-relative d-flex align-items-center me-1">
                        Sanchi, MP</h6><img src="assets/images/svg_icon/near.svg" className="img-fluid ms-auto" alt="" />
                </div>
                <div className="ride_user_retes d-flex align-items-center mt-3">
                    <div className="ride_user_details d-flex align-items-center">
                        <span className="d-flex align-items-center position-relative">
                            <span className="user_image"><img src="assets/images/istockphoto.png" className="user_icon" alt="" /></span>
                            <span className="icon-verified_black_24dp verified_icon"></span>
                            <span className="arrow_car">
                            </span>
                        </span>
                        <h6 className="user_name font-12 font-500 mb-0 ms-1">Marcus Stoinis</h6>
                        <span className="ride_rating">4.5 <span className="icon-Path-4069 ms-1"></span></span>
                    </div>
                    <div className="rate_details ms-auto">
                        <span className="rate primary font-600"><span className="font-400">₹</span> 320</span> <span
                            className=" seats secondary font-14 font-500">| Seat</span>
                    </div>
                </div>
                <div className="ride_car_detail d-flex align-items-center">
                    <div className="car d-flex align-items-center">
                        <img src="assets/images/uberx.svg" className="img-fluid car" alt="" />
                        <h6 className="font-12 font-500 ms-1">Toyota Glanza</h6>
                    </div>
                    <div className="ride_other_details d-flex ms-auto">
                        <span className="ride_other_icon d-flex align-items-center justify-content-center"><span
                            className="icon-Component-61--3"></span></span>
                        <span
                            className="ride_other_icon d-flex align-items-center justify-content-center ms-2 text-white">+3</span>
                    </div>
                </div>
            </div>
        </div>

    )
}