import { useContext,useRef } from "react"
import { Row, Col, Table, Image, Button, Form } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
  const { CLP, cart, total, setCart, cartFilter, coupon, setCoupon } = useContext(DataContext)
  const cart_mamapuntos = Math.trunc(total / 100)
  const inputRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleClick= () => {
    setCoupon(inputRef.current.value)
    inputRef.reset()
  }

  return (
    <>
      <Row className="mb-3 justify-content-between">
        <Col className="col-8 p-3 border rounded bg-white">
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
        <Col className="col-1 border-0"></Col>
        <Col className="col-3 p-3 border rounded bg-white text-center">
          <div className="fw-bolder me-3 pb-3 border-bottom">
            <Form onSubmit={handleSubmit}>
              <h5>Cupón de Descuento</h5>
              <input ref={inputRef} type="text" className="me-2" style={{ width: '50%' }}></input>
              <Button className="bg-grey border-0" onClick={handleClick}>Canjear</Button>
            </Form>
          </div>
          <div className="fw-bolder fs-2 mb-3 text-center">Total: {CLP.format(total)}</div>
          <div className="text-center"><Button className="bg-success border-0" type="button" href="#">Ir a pagar</Button></div>
        </Col>
      </Row>
      <Row className="border rounded bg-white text-center">
        <Col className="col-12 p-3 fw-bolder">
          ¡Con esta compra acumularás {cart_mamapuntos} 🧑🏼‍🍳 MamaPuntos!
        </Col>
      </Row>
    </>
  )
}

export default CartDetail