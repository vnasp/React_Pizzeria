import { useContext } from "react"
import { Col, Row, Card, ListGroup, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const Menu = () => {
    const { pizzas } = useContext(DataContext)

    return (
        <><Row xs={1} md={4} className="g-4">
            {pizzas.map((pizza) => (
                <Col>
                    <Card key={pizza.id}>
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body>
                            <Card.Title className="text-capitalize text-center">{pizza.name}</Card.Title>
                            <hr></hr>
                        </Card.Body>
                        <Card.Body className="text-left border-bottom">
                        <Card.Subtitle>Ingredientes:</Card.Subtitle>
                        <ListGroup classvName="text-capitalize border-0">
                            <ListGroup.Item className="border-0">🥓 {pizza.ingredients[0]} </ListGroup.Item>
                            <ListGroup.Item className="border-0">🍅 {pizza.ingredients[1]} </ListGroup.Item>   
                            <ListGroup.Item className="border-0">🍕 {pizza.ingredients[2]} </ListGroup.Item>
                            <ListGroup.Item className="border-0">🍕 {pizza.ingredients[3]} </ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text className="fw-bolder fs-2 text-center">{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(pizza.price)}
                        </Card.Text>
                        </Card.Body>
                        <Card.Body className="d-flex justify-content-around">
                            <Button className="bg-primary" href="#">Ver Más 👀</Button>
                            <Button className="bg-warning border-0 text-black" href="#">Añadir 🛒</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

        </Row>
        </>
    )
}

export default Menu
