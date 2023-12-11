import { Navbar, Nav, Container,Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <Navbar expand="lg" className="bg-success bg-gradient navbar-dark">
      <Container>
        <Navbar.Brand href="#home"><h1><Image src="logo.png" />NaturalPic</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={setActiveClass}
              id="NavLink"
            > Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={setActiveClass}
              id="NavLink"
            > Favoritos
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Navigation
