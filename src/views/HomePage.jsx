import { Container, Row, Col } from "react-bootstrap"
import PizzaMenu from "../components/PizzaMenu"

const HomePage = () => {
    return (
        <> <Container className="padding-custom">
            <Row className="mb-3">
                <Col className="text-left text-white img-bg rounded">
                    <div id="texto">
                      <h1>Pizzería Mamma Mia</h1>
                    <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
                    </div></Col>
            </Row>
            <PizzaMenu />
        </Container>
        </>
    )
}

export default HomePage