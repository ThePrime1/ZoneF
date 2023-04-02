import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar">
            <nav>
                <h1>Zone<span>Force</span></h1>

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About Us</Link></li>
                    <li><Link to='/'>Collections</Link></li>
                    <li><Link to='/'>Services</Link></li>
                    <li><Link to='/'>Career</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;