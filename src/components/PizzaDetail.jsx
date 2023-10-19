import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Col, Row, Image, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const PizzaCard = () => {
    const { pizzas, addToCart, CLP } = useContext(DataContext)
    const { id } = useParams()

    const pizzaIndex = pizzas.findIndex(pizza => {
        return pizza.id === id
    })

    const pizzaIngredients = pizzas[pizzaIndex].ingredients?.map((ingredient, i) => {
        return (<li key={i}>🍕 {ingredient}</li>)
    })

    return (
        <>
            <Row key={pizzas[pizzaIndex].id} className="border rounded bg-white align-items-start">
                <Col className="col-6 p-0">
                    <Image src={pizzas[pizzaIndex].img} />
                </Col>
                <Col className="col-6 p-3">
                    <h4 className="text-capitalize text-center">{pizzas[pizzaIndex].name}</h4>
                    <p>{pizzas[pizzaIndex].desc}</p>
                    <p className="fw-bolder">Ingredientes:</p>
                    <ul className="text-capitalize list-unstyled">{pizzaIngredients}</ul>
                    <Row className="align-items-stretch border-top pt-3">
                        <Col className="col-8"><p className="fw-bolder fs-2 lh-1 text-left">Precio: {CLP.format(pizzas[pizzaIndex].price)}
                        </p></Col>
                        <Col className="col-4"><Button className="bg-warning border-0 text-black" type="button" value={pizzas[pizzaIndex].id} onClick={(e) => addToCart(e,'value')}>Añadir 🛒</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default PizzaCard
