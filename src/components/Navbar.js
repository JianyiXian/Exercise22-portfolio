import NavItem from "./NavItem";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center " id="collapsibleNavId">
                <ul className="navbar-nav mt-2 mt-lg-0">

                    <NavItem src='fa-solid fa-house' name='About' />
                    <NavItem src='fa-solid fa-school' name='Education' />
                    <NavItem src='fa-solid fa-bars' name='Technical Skills' />
                    <NavItem src='fa-solid fa-star' name='Project' />
                    <NavItem src='fa-solid fa-list' name='Achievements' />
                    <NavItem src='fa-solid fa-circle-user' name='Contact Me' />

                </ul>


            </div>
        </nav>

    )
}

export default Navbar;