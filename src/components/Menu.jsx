import { useState, useEffect } from "react"
import { Card, ListGroup, Button } from "react-bootstrap"

const API_URL = "/pizzas.json"

const Menu = () => {
    const [pizzas, setPizzas] = useState([])
    const getPizzas = async () => {
        const response = await fetch(API_URL)
        const data = await response.json()
        setPizzas(data)
    }
    useEffect(() => {
        getPizzas()
    }, [])
    return (
        <>
            {pizzas.map((pizza) => (
                <Card key={pizza.id}>
                    <Card.Img variant="top" src={pizza.img} />
                    <Card.Body>
                        <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>✔️ Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>✔️ Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>✔️ Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body><Card.Text>${pizza.price}</Card.Text> </Card.Body>
                    <Card.Body className="d-flex justify-content-around">
                        <Button className="bg-primary" href="#">Ver Más 👀</Button>
                        <Button className="bg-warning border-0 text-black" href="#">Añadir 🛒</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default Menu
