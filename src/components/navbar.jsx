import { Link } from "react-router-dom"
import '../css/navbar.css'
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="link"><h4>MyMovieList</h4></Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar