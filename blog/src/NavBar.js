//press sfc to get a stateless functional component
//this could be un arrow function or a simple function
//to handle a router in the browser only 
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* routing later on */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>

    );
}

export default Navbar;