import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Col, Row, Image, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const PizzaCard = () => {
    const { pizzas } = useContext(DataContext)
    const {cart, setCart} = useContext(DataContext)
    const { CLP } = useContext(DataContext)
    const { id } = useParams()
    const pizzaIndex = pizzas.findIndex(pizza => {
        return pizza.id === id
    })
    return (
        <>
        <h1 className="text-capitalize text-center p-3">{pizzas[pizzaIndex].name}</h1>
            <Row key={pizzas[pizzaIndex].id} className="border rounded bg-white align-items-start">
                <Col className="col-6 p-0">
                    <Image variant="top" src={pizzas[pizzaIndex].img}/>
                </Col>
                <Col className="col-6 p-3">
                    <p>{pizzas[pizzaIndex].desc}</p>
                    <ul>
                        <li className="border-0">🥓 {pizzas[pizzaIndex].ingredients} </li>
                        <li className="border-0">🍅 {pizzas[pizzaIndex].ingredients} </li>
                        <li className="border-0">🍕 {pizzas[pizzaIndex].ingredients} </li>
                        <li className="border-0">🍕 {pizzas[pizzaIndex].ingredients} </li>
                    </ul>
                    <hr></hr>
                    <Row className="align-items-center">
                        <Col className="col-8"><p className="fw-bolder fs-2 lh-1 text-left">Precio: {CLP.format(pizzas[pizzaIndex].price)}
                        </p></Col>
                        <Col className="col-4"><Button className="bg-warning border-0 text-black">Añadir 🛒</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default PizzaCard
