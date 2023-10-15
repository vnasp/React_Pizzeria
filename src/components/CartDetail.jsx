import { useContext } from "react"
import { Container, Row, Table, Image, Button, Col } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
    const { CLP } = useContext(DataContext)
    const cart_price = 1000
    const cart_qty = 2
    const cart_total = cart_price * cart_qty
    const cart_mamapuntos = cart_total / 100

    return (
        <Container>
            <Row className="border rounded bg-white mb-3">
                <Col className="col-8 p-3">
                    <Table>
                        <thead>
                            <tr>
                                <th className="w-25"></th>
                                <th className="w-100">Pizza</th>
                                <th className="w-50">Precio</th>
                                <th className="w-25"></th>
                                <th className="w-50">Cantidad</th>
                                <th className="w-25"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Image src="" /> </td>
                                <td> nombre de la pizza desde objeto </td>
                                <td>{CLP.format(cart_price)}</td>
                                <td><Button className="bg-primary" type="button">-</Button></td>
                                <td className="text-center fw-bolder">{cart_qty}</td>
                                <td><Button className="bg-warning border-0 text-black" type="button">+</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col className="col-4 p-3">
                    <div className="fw-bolder fs-2 mb-3">Total: {CLP.format(cart_total)}</div>
                    <div><Button className="bg-success border-0" type="button" href="#">Ir a pagar</Button></div>
                </Col>
            </Row>
            <Row className="border rounded bg-white align-items-center text-center">
                <Col className="col-12 p-3 fw-bolder">
                    ¡Con esta compra acumularás {cart_mamapuntos} 🧑🏼‍🍳 MamaPuntos!
                </Col>

            </Row>
        </Container>
    )
}

export default CartDetail