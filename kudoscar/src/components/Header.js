
export default function Header(props) {
    return (
        <>
            <div className="full_width_overlay"></div>

            <header className="d-inline-block w-100">
                <nav className="navbar navbar-expand-lg navbar-light bg-white main-navbar">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">About Kudos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="faq.html">Faq’s</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="help_center.html">Help Center</a>
                                </li>

                            </ul>
                            <div className="logo">
                                <a className="navbar-brand p-0" href="index.html">Kudos<span className="primary">Car</span></a>
                            </div>
                            <div className="other_option">
                                <a href="contact_us.html" className="btn btn-outline-primary contact_btn">Contact Us</a>
                                <a href="#" className="btn btn-dark login_signup">Login & Sign Up</a>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}