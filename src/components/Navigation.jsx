import { useContext } from "react"
import { Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
  const { CLP, total } = useContext(DataContext)
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand ps-3" href="#"> <h1><Image src="../assets/img/logo.png" id="logo" /><span id="logo-text" className="logo-text">PIZZAS</span></h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around">
          <div className="d-flex justify-content-around bg-white rounded shadow-sm p-3 w-75 align-self-center">
            <NavLink
              to="/"
              className={setActiveClass}
            > 🏠 Inicio
            </NavLink>
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
        </div>
        <div id="carrito" className="bg-warning bg-gradient rounded shadow-sm p-3 w-10">
          <NavLink
            to="/carrito"
          > 🛒 {CLP.format(total)}
          </NavLink>
        </div>
      </div>
    </nav >
  )
}
export default Navigation