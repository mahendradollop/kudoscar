export default function DriveCarSoon(props) {
    return (

        <section className="driving_your_car">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="assets/images/car_with_person.svg" className="car_with_person img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="driving_car_text ms-auto">
                            <h3 className="section_main_heading safty dark  position-relative d-inline-block">Driving in your car <span
                                className="dark font-600">soon?</span> </h3>
                            <p className="section_details font-14 font-400">At KudosCar, we're working hard to make our platform as secure
                                as it can be.
                                But when scams do happen, we want you to know exactly how to avoid and report them.
                                Follow our tips to help us keep you safe.
                            </p>
                            <button className="btn btn-primary">Offer Ride Now <span className="icon-long_arrow ms-2 font-14"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}