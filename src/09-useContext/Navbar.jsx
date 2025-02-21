import { Link, NavLink } from 'react-router'

export const Navbar = () => {
  return (
<nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary rounded-3" data-bs-theme="dark">
    <div className="container-fluid">

        <Link className="navbar-brand" href="#">useContext</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <NavLink 
                    className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink 
                    className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                    to="/about"
                >
                    About
                </NavLink>

                <NavLink 
                    className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                    to="/login"
                >
                    Login
                </NavLink>
            </ul>
        </div>
    </div>
</nav>
  )
}
