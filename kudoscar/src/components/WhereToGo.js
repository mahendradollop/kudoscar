import Trip from "./Trip"
export default function WhereToGo(props) {
    return (
        <section className="where_wnat_to_go bg-primary">
            <div className="container">
                <div className="main_section_heading_box text-center">
                    <h3 className="section_main_heading text-white text-center position-relative d-inline-block">Where do you want to
                        <span className="dark font-600">go?</span>
                    </h3>
                </div>
                <div className="recent_rides_box">
                    <div className="row">                        
                        <Trip/>
                        <Trip/>
                        <Trip/>
                        <Trip/>
                        <Trip/>
                        <Trip/>
                    </div>
                    <div className="view_all_recent_rides d-flex">
                        <button className="btn btn-white mx-auto">View All Rides <span className="icon-down_arrow font-14"></span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}