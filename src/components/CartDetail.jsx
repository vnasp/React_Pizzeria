import { useState, useContext } from "react"
import { Row, Table, Image, Button, Col } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
    const { CLP } = useContext(DataContext)
    const { cart } = useContext(DataContext)
    const { total, setTotal } = useContext(DataContext)
    const [cartQuantity, setCartQuantity] = useState(1)
    const cart_mamapuntos = Math.trunc(cart.price * cartQuantity / 100)

    const incrementQty = () => setCartQuantity(cartQuantity + 1);
    let decrementQty = () => setCartQuantity(cartQuantity - 1);

    return (
        <>
            <Row className="border rounded bg-white mb-3">
                <Col className="col-8 p-3">
                    <Table>
                        <thead>
                            <tr>
                                <th className="w-25"></th>
                                <th className="w-100">Pizza</th>
                                <th className="w-50">Subtotal</th>
                                <th className="w-25"></th>
                                <th className="w-50">Cantidad</th>
                                <th className="w-25"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.map((item) => (
                            <tr className="align-middle" key={item.img}>
                                <td><Image src={item.img} className="img-thumbnail" /> </td>
                                <td className="text-capitalize">{item.name}</td>
                                <td>{item.price * cartQuantity}</td>
                                <td><Button className="bg-primary" type="button" onClick={decrementQty}>-</Button></td>
                                <td className="text-center fw-bolder">{cartQuantity}</td>
                                <td><Button className="bg-warning border-0 text-black" type="button" onClick={incrementQty}>+</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col className="col-4 p-3">
                    <div className="fw-bolder fs-2 mb-3">Total: {total}</div>
                    <div><Button className="bg-success border-0" type="button" href="#">Ir a pagar</Button></div>
                </Col>
            </Row>
            <Row className="border rounded bg-white align-items-center text-center">
                <Col className="col-12 p-3 fw-bolder">
                    ¡Con esta compra acumularás {cart_mamapuntos} 🧑🏼‍🍳 MamaPuntos!
                </Col>
            </Row>
        </>
    )
}

export default CartDetail