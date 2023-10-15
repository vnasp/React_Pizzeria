import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const API_URL = "/pizzas.json"
    const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
    const [pizzas, setPizzas] = useState([])
    const [cart, setCart] = useState({});

    const getPizzas = async () => {
        const response = await fetch(API_URL)
        const data = await response.json()
        setPizzas(data)
    }
    useEffect(() => {
        getPizzas()
    }, [])

    return (
        <DataContext.Provider value={{ pizzas, setPizzas, CLP }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider