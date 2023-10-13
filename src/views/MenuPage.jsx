import { Row, Col, Container } from "react-bootstrap"
import Menu from "../components/Menu"

const PizzaPage = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center"> <h1>Elige tu pizza</h1>
                    <h3>Pide ahora y disfruta de las mejores pizzas artesanales</h3></Col>
            </Row>

            <Menu />
        </Container>
    )
}

export default PizzaPage