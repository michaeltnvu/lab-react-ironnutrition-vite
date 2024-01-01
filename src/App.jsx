import { useState } from "react";
import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleSubmit = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm handleSubmit={handleSubmit} />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
