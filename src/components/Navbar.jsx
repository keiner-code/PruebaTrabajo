import React  from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="navbar">
        <nav>
            <ul>
                <li><Link to="/">Formulario De Registro</Link></li>
                <li><Link to="/list">Formulario De Vista</Link></li>
                <li><Link to="/crud">Formulario Crud</Link></li>
            </ul>
        </nav>
    </div>
    )
}
export default Navbar;