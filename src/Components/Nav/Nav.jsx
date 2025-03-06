import {NavLink} from "react-router"
import "./Nav.css"

function Nav() {

    const itemNav = [
        { path: "/", label: "Sobre mi" },
        { path: "/proyectos", label: "Proyectos" },
        { path: "/contactos", label: "Contactos" },
      ];

return(
     <nav>
        <ul>
            {itemNav.map((item, index) => (
                <li key={index}>
                    <NavLink className="navLink"  to={item.path} end> {item.label} </NavLink>
                </li>
            ))}
            
        </ul>
    </nav>
)

}

export default Nav;