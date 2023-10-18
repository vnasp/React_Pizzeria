import { Row, Col } from "react-bootstrap"

const CartEmpty = () => {
    return (
        <>
            <Row className="mb-3">
                <Col className="text-center">
                    <h1>Tu Carrito está vacío</h1>
                    <h3>Falta pizza en tu vida</h3>
                </Col>
            </Row>
            <Row className="border rounded bg-white text-center">
                <Col>
                    <p className="pt-2">Usa el cupón 🏷️ <span className="text-primary fw-bolder">MEDIOHAMBRE</span> y obtén un 10% de descuento en tu compra.</p>
                </Col>
            </Row>
        </>
    )
}

export default CartEmpty