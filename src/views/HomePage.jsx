import { Col, Row, Container } from "react-bootstrap"
import Menu from "../components/Menu"

const HomePage = () => {
    return (
        <> <Container>
            <Row className="mb-3">
                <Col className="text-center"> <h1>¡Pizzería Mamma Mia!</h1>
                    <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3></Col>
            </Row>

            <Menu />
        </Container>
        </>
    )
}

export default HomePage