import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import PizzaMenu from "../components/PizzaMenu"

const HomePage = () => {
    return (
        <> <Container className="p-container">
            <Row className="mb-3">
                <Col className="text-center"> <h1>¡Pizzería Mamma Mia!</h1>
                    <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3></Col>
            </Row>
            <Row className="mb-3">
                <Col className="text-center">
                    <Link to="/pizzas">
                        <img
                            src="../src/assets/img/banner.jpg"
                            alt="Las mejores pizzas"
                        />
                    </Link>

                </Col>
            </Row>
            <PizzaMenu />
        </Container>
        </>
    )
}

export default HomePage