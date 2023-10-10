import { Row, Col, Container } from "react-bootstrap"
import Menu from "../components/Menu"

const HomePage = () => {
    return (
        <> <Container>
            <Row>
                <Col> <h1>¡Pizzería Mamma Mia!</h1>
                    <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3></Col>
            </Row>

            <Row>
                <Col><Menu /></Col>
            </Row>
        </Container>
        </>
    )
}

export default HomePage