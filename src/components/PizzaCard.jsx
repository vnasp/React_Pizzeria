import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Col, Row, Image, Button} from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const PizzaCard = () => {
    const { pizzas } = useContext(DataContext)
    const { name } = useParams()
    const pizzaDetail = pizzas.findIndex(pizza => {
        return pizza.name === name
    });
   
    return (
        <>
        <Row key={pizzas[pizzaDetail].id} className="border rounded p-3 align-items-center">
            <Col className="col-6">
                <Image variant="top" src={pizzas[pizzaDetail].img} />
            </Col>
            <Col className="col-6">
                <h3 className="text-capitalize">{pizzas[pizzaDetail].name}</h3>
                <p>{pizzas[pizzaDetail].desc}</p>
                <ul><li>{pizzas[pizzaDetail].ingredients}</li></ul>
                <Col><p>Precio: {pizzas[pizzaDetail].price}</p></Col>
                <Col><Button className="bg-warning border-0 text-black">Añadir 🛒</Button>
</Col>
            </Col>
        </Row>
        </>
    )
}

export default PizzaCard
