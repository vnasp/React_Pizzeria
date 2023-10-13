import { Row, Col, Container } from "react-bootstrap"
import PizzaCard from "../components/PizzaCard"

const PizzaPage = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center"> <h1>Info Pizza</h1></Col>
            </Row>

            <PizzaCard />
        </Container>
    )
}

export default PizzaPage