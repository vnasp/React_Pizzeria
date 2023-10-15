import { useContext } from "react"
import { Navbar,Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)
    const { cart_total } = useContext(DataContext)
    const { CLP } = useContext(DataContext)

    let total
    if ( cart_total > 0) {
        total =  CLP.format(cart_total)
    }
    else {
        total = CLP.format(0)
    }

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
                        > 🛒 {total}
                        </NavLink></div>
            </Navbar>
        </>
    )
}
export default Navigation