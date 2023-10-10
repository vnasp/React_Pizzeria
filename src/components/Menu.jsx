import { Card, ListGroup, Button } from "react-bootstrap"

const Menu = () => {
    return (
        <Card>
            <Card.Img variant="top" src="." />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Ingredientes:
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>✔️ Cras justo odio</ListGroup.Item>
                <ListGroup.Item>✔️ Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>✔️ Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body className="d-flex justify-content-around">
                <Button className="bg-primary" href="#">Ver Más 👀</Button>
                <Button className="bg-warning border-0" href="#">Añadir 🛒</Button>
            </Card.Body>
        </Card>
    )
}

export default Menu
