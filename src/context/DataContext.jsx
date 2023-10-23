import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const API_URL = "/pizzas.json"
    const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
    const [pizzas, setPizzas] = useState([])
    const [cart, setCart] = useState([])
    const [coupon, setCoupon] = useState('')

    try {
        const getPizzas = async () => {
            const response = await fetch(API_URL)
            if (response.status != 200) {
                throw new Error
            }
            const data = await response.json()
            setPizzas(data)
        }
        useEffect(() => {
            getPizzas()
        }, [])
    }
    catch (Error) {
        alert({ Error })
    }

    const addToCart = (e) => {
        const pizzaIndex = pizzas.findIndex(pizza => {
            return pizza.id === e.target.value
        })
        const cartIndex = cart.findIndex(cartpizza => {
            return cartpizza.id === e.target.value
        })

        if (cartIndex < 0) {
            setCart([...cart, {
                id: pizzas[pizzaIndex].id,
                img: pizzas[pizzaIndex].img,
                name: pizzas[pizzaIndex].name,
                price: pizzas[pizzaIndex].price,
                qty: 1,
            }])
        }
        else {
            cart[cartIndex].qty += 1
            setCart([...cart])
        }

    }

    const cartFilter = cart.filter((item) => item.qty > 0)

    let discount
    if (coupon.toLowerCase() == "tengohambre") {
      discount = 0.9
    }
    else {
      discount = 1
    }
    
    const total = (cartFilter.reduce((accumulator, {qty,price}) => accumulator + (qty * price), 0)) * discount
    
    return (
        <DataContext.Provider value={{ pizzas, setPizzas, addToCart, cartFilter, cart, setCart, coupon, setCoupon, total, CLP }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider