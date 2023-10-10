import './App.css'
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import HomePage from "./views/HomePage"
import PizzaPage from "./views/PizzaPage"
import CartPage from "./views/CartPage"
import NotFound from "./views/NotFound"

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/pizzas"
          element={<PizzaPage />} />
        <Route
          path="/cart"
          element={<CartPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App