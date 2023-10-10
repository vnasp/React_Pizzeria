import { Row, Col, Container } from "react-bootstrap"
import Menu from "../components/Menu"

const HomePage = () => {
    return (
        <> <div>
            <h1>Titulo con portada</h1>
            <h3>Bajada de título</h3>
        </div>
            <Container>
                <Row>
                    <Col><Menu /></Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage