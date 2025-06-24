import PlantCard from "./PlantCard";

function PlantList({ plants, onAdd }) {
    return (
        <div className="plant-list">
            <h2>💚Plant Besties💚</h2>
            {plants.map(plant => (
                <PlantCard key={plant.id} plant={plant} onAdd={onAdd} />
            ))}
        </div>
    );
}

export default PlantList;