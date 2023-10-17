import { Row, Col, Container } from "react-bootstrap"
import PizzaMenu from "../components/PizzaMenu"

const PizzaPage = () => {
    return (
        <Container className="p-container">
            <Row className="mb-3">
                <Col className="text-center">
                    <h1>Elige tu pizza</h1>
                    <h3>Pide ahora y disfruta de las mejores pizzas artesanales</h3>
                </Col>
            </Row>
            <PizzaMenu />
        </Container>
    )
}

export default PizzaPage