import { Container, Navbar,Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

    return (
        <>
            <Navbar
                className="d-flex flex-row justify-content-between"
                variant="light"
            >
                    <div className="p-3"><Navbar.Brand><Image src="../src/assets/img/logo.png"/><span className="logo-text">PIZZAS</span></Navbar.Brand></div>
                    <div className="d-flex flex-row justify-content-around bg-white rounded shadow-sm w-70 p-3">
                        <NavLink
                            to="/"
                            className={setActiveClass}
                        >
                            🏠 Inicio </NavLink>
                        <NavLink
                            to="/pizzas"
                            className={setActiveClass}
                        > 🍕 Menú
                        </NavLink>
                        <NavLink
                            to="/mamapuntos"
                            className={setActiveClass}
                        > 🧑🏼‍🍳 MamaPuntos
                        </NavLink>
                        <NavLink
                            to="/locales"
                            className={setActiveClass}
                        > ⛺ Hazme Click
                        </NavLink>
                    </div>
                    <div className="bg-warning bg-gradient rounded shadow-sm w-10 p-3">
                    <NavLink
                            to="/carrito"
                        > 🛒 $0
                        </NavLink></div>
            </Navbar>
        </>
    )
}
export default Navigation