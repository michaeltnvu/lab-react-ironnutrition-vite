import { useState } from "react";
import { v4 } from "uuid";

const AddFoodForm = ({ handleSubmit }) => {
  const [newFood, setNewFood] = useState({
    id: v4(),
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(newFood);

    setNewFood({
      id: v4(),
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={newFood.name || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image
        <input
          type="text"
          name="image"
          value={newFood.image || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Calories
        <input
          type="number"
          name="calories"
          value={newFood.calories}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Servings
        <input
          type="number"
          name="servings"
          value={newFood.servings}
          onChange={handleChange}
          required
        />
      </label>
      <button>Create</button>
    </form>
  );
};

export default AddFoodForm;
