import { useContext } from "react"
import { Navbar,Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)
    const { CLP } = useContext(DataContext)
    const { total } = useContext(DataContext)

    return (
        <>
            <Navbar
                className="d-flex justify-content-between fixed-top bg-white py-0 px-3 "
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
                    </div>
                    <div className="bg-warning bg-gradient rounded shadow-sm w-10 p-3">
                    <NavLink
                            to="/carrito"
                        > 🛒 {CLP.format(total)}
                        </NavLink></div>
            </Navbar>
        </>
    )
}
export default Navigation