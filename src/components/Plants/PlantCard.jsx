function PlantCard( { plant, onAdd }) {
    return (
        <div className="plant-card">
            <span className="plant-image">{plant.image}</span>
            <h3>{plant.name}</h3>
            <button onClick={() => onAdd(plant)}>Add to Cart</button>
        </div>
    );
}

export default PlantCard;