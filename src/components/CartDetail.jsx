import { useContext } from "react"
import { Row, Table, Image, Button, Col } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
    const { CLP } = useContext(DataContext)
    const { cart, setCart } = useContext(DataContext)
    const { cartFilter } = useContext(DataContext)
    const { total } = useContext(DataContext)
    const cart_mamapuntos = Math.trunc(total / 100)

    const incrementQty = (e) => {
        const cartIndex = cart.findIndex(item => {
            return item.id === e.target.value
        })
        const updateCart = [...cart]
        updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty + 1 }
        setCart(updateCart)
    }

    const decrementQty = (e) => {
        const cartIndex = cart.findIndex(item => {
            return item.id === e.target.value
        })
        const updateCart = [...cart]
        updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty - 1 }
        if (updateCart[cartIndex].qty <= 0) { updateCart[cartIndex].qty = 0 }
        setCart(updateCart)
    }

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
                            {cartFilter.map((item) => (
                                <tr className="align-middle" key={item.id}>
                                    <td><Image src={item.img} className="img-thumbnail" /> </td>
                                    <td className="text-capitalize">{item.name}</td>
                                    <td>{CLP.format(item.price * item.qty)}</td>
                                    <td><Button className="bg-primary" type="button" value={item.id} onClick={(e) => decrementQty(e, 'value')}>-</Button></td>
                                    <td className="text-center fw-bolder">{item.qty}</td>
                                    <td><Button className="bg-warning border-0 text-black" type="button" value={item.id} onClick={(e) => incrementQty(e, 'value')}>+</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col className="col-4 p-3">
                    <div className="fw-bolder fs-2 mb-3">Total: {CLP.format(total)}</div>
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