import {NavLink} from "react-router"

function Nav() {

return(
     <nav>
        <ul>
            <li>
            <NavLink to="/" end> Sobre mi </NavLink>
            </li>
            <li>
            <NavLink to="/" end> Proyectos </NavLink>
            </li>
            <li>
            <NavLink to="/" end> Contactos </NavLink>
            </li>
        </ul>
    </nav>
)

}

export default Nav;