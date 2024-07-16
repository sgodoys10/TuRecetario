import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <nav className="container">
            <Link to="/" className="title">Tu Recetario</Link>
            <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open": "" }>
                <li>
                    <NavLink to="/comidas">Comidas</NavLink>
                </li>
                <li> 
                    <NavLink to ="/bebidas">Bebidas</NavLink>
                </li>
                <li> 
                    <NavLink to ="/postres">Postres</NavLink>
                </li>
                <li> 
                    <NavLink to ="/chefs">Chefs</NavLink>
                </li>
            </ul>
        </nav>
    ); 
}; 