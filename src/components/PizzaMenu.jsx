import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Col, Row, Card, ListGroup, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const PizzaMenu = () => {
    const { pizzas, addToCart, CLP } = useContext(DataContext)
    const [pizzaSelected, setPizzaSelected] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      
        e.preventDefault()
        navigate(`/pizza/${pizzaSelected}/`)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Row xs={1} md={2} lg={4} className="g-4">
                {pizzas.map((pizza) => (
                    <Col key={pizza.id}>
                        <Card>
                            <Card.Img variant="top" src={pizza.img} />
                            <Card.Body>
                                <Card.Title className="text-capitalize text-center">{pizza.name}</Card.Title>
                                <hr></hr>
                            </Card.Body>
                            <Card.Body className="text-left border-bottom">
                                <Card.Subtitle>Ingredientes:</Card.Subtitle>
                            <ListGroup className="text-capitalize border-0">
                                    {pizza.ingredients.map((ingredient, index) => (
                                    <ListGroup.Item className="border-0" key={index}> 🍕{ingredient}</ListGroup.Item>
                                    ))}
                            </ListGroup>
                        </Card.Body>
                        <Card.Body>
                            <Card.Text className="fw-bolder fs-2 text-center">{CLP.format(pizza.price)}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body className="d-flex justify-content-around" id="PizzaButons">
                            <Button className="bg-primary" type="submit" value={pizza.id} onClick={({ target }) => setPizzaSelected(target.value)}>Ver Más 👀</Button>
                            <Button className="bg-warning border-0 text-black" type="button" value={pizza.id} onClick={(e) => addToCart(e, 'value')}>Añadir 🛒</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                ))}
        </Row>
        </Form >
    )
}

export default PizzaMenu
