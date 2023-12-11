import { useContext } from "react"
import { Navbar, Nav, Container, Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
  const { CLP, total } = useContext(DataContext)
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <Navbar expand="lg" className="navbar-light d-flex justify-content-between">
      <Container>
        <Navbar.Brand href="#home"><h1><Image src="/logo.png" id="logo" /><span id="logo-text" className="logo-text">PIZZAS</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-around bg-white rounded shadow-sm p-3 w-75 align-self-center">
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
          </Nav>
          <div id="carrito" className="bg-warning bg-gradient rounded shadow-sm p-3 w-10">
            <NavLink
              to="/carrito"
            > 🛒 {CLP.format(total)}
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation
