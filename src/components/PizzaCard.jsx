import { useContext } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Col, Row, Image, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const PizzaCard = () => {
    const { pizzas } = useContext(DataContext)
    const { setCart } = useContext(DataContext)
    const { CLP } = useContext(DataContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const pizzaIndex = pizzas.findIndex(pizza => {
        return pizza.id === id
    })

    const pizzaIngredients = pizzas[pizzaIndex].ingredients?.map((ingredient, i) => {
        return (<li key={i}>🍕 {ingredient}</li>)
    })

    const addToCart = (e) => {
        e.preventDefault()
        setCart({
            img: pizzas[pizzaIndex].img,
            name: pizzas[pizzaIndex].name,
            price: pizzas[pizzaIndex].price,
            qty: 1,
        })
        navigate(`/carrito/`)
    }
    return (
        <>
            <h1 className="text-capitalize text-center p-3">{pizzas[pizzaIndex].name}</h1>
            <Row key={pizzas[pizzaIndex].id} className="border rounded bg-white align-items-start">
                <Col className="col-6 p-0">
                    <Image className="img-fluid" src={pizzas[pizzaIndex].img} />
                </Col>
                <Col className="col-6 p-3">
                    <p>{pizzas[pizzaIndex].desc}</p>
                    <h3 className="fw-bolder">Ingredientes:</h3>
                    <ul className="text-capitalize list-unstyled">{pizzaIngredients}</ul>
                    <hr></hr>
                    <Row className="align-items-center">
                        <Col className="col-8"><p className="fw-bolder fs-2 lh-1 text-left">Precio: {CLP.format(pizzas[pizzaIndex].price)}
                        </p></Col>
                        <Col className="col-4"><Button className="bg-warning border-0 text-black" type="submit" onClick={addToCart}>Añadir 🛒</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default PizzaCard
