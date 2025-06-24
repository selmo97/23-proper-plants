import { useState } from "react";
import PLANTS from "./data";
import "./App.css";
import PlantList from "./components/Plants/PlantList";
import Cart from './components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (plant) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(item => item.id === plant.id)
    if (existingItem.quantity === 1) {
      return prevCart.filter(item => item.id !== plant.id)
    } else {
      return prevCart.map(item =>
        item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    }
  })
}

  return (
    <div className="app-container">
      <h1>🪴 Proper Plants</h1>
      <div className="contents">
        <PlantList plants={PLANTS} onAdd={handleAddToCart} />
      <Cart cartItems={cart} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;
