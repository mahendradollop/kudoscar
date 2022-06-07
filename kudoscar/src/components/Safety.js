export default function Safety(props) {
    return (
        <section className="safty_priority">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3 className="section_main_heading dark safty text-center position-relative d-inline-block">Your safety is our
                            <span className="primary font-600">Priority</span>
                        </h3>
                        <p className="section_details font-14 font-400">At KudosCar, we're working hard to make our platform as secure as
                            it can be.
                            But when scams do happen, we want you to know exactly how to avoid and report them.
                            Follow our tips to help us keep you safe.
                        </p>
                        <button className="btn btn-primary">Book Now <span className="icon-long_arrow ms-2 font-14"></span></button>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/images/safty_right_img.svg" className="img-fluid safty_right_img" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}