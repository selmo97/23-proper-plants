function Cart({ cartItems, onAdd, onRemove}) {
    return (
        <div className="cart">
            <h2>🛒 Your Cart</h2>
            {cartItems.length === 0 && <p>Your Cart is empty!</p>}
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <span>{item.name}</span>
                    <span>Qty: {item.quantity}</span>
                    <button onClick={() => onRemove(item)}>-</button>
                    <button onClick={() => onAdd(item)}>+</button>
                    </div>
            ))}
        </div>
    )
}

export default Cart