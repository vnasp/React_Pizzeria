import { useContext } from "react"
import { Nav, Navbar, Container, Image, Offcanvas } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
  const { CLP, total } = useContext(DataContext)
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary bg-custom mx-3 fixed-top">
          <Container fluid className="d-flex justify-content-between">
            <Navbar.Brand><Image src="../assets/img/logo.png" /><span className="logo-text">PIZZAS</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="align-items-center"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex flex-row bg-white rounded shadow-sm w-100 p-3 me-3">
                <Nav className="justify-content-around flex-grow-1 pe-3"><NavLink
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
              </Offcanvas.Body>

            </Navbar.Offcanvas>
            <Navbar.Text className="bg-warning bg-gradient rounded shadow-sm p-3">
              <NavLink
                to="/carrito"
              > 🛒 {CLP.format(total)}
              </NavLink>
            </Navbar.Text>
          </Container>
        </Navbar>
      ))}
    </>
  )
}
export default Navigation