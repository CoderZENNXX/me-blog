import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Me-Blog</h1>
            <div className="links">
                <Link className="page-link home" to="/">Home</Link>
                <Link className="page-link new-blog"to="/createBlog">New Blog +</Link>
            </div>
        </nav>

    );
}
 
export default NavBar;