import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const API_URL = "/pizzas.json"
    const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
    const [pizzas, setPizzas] = useState([])
    const [cart, setCart] = useState([])
    const cartFilter = cart.filter((item) => item.qty > 0)


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
        const pizzaIndex = pizzas.findIndex( pizza => {
            return pizza.id === e.target.value})
        setCart([...cart, {
            id: pizzas[pizzaIndex].id,
            img: pizzas[pizzaIndex].img,
            name: pizzas[pizzaIndex].name,
            price: pizzas[pizzaIndex].price,
            qty: 1,
        }])
    }
 
    const total = cart.reduce((acumulador, actual) => acumulador + (actual.price*actual.qty),0)

    return (
        <DataContext.Provider value={{ pizzas, setPizzas, addToCart, cartFilter, cart, setCart, total, CLP }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider