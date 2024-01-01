const FoodBox = ({ food, handleDelete }) => {
  return (
    <div>
      <p>{food.name}</p>
      <img src={food.image} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories}</b> kCal
      </p>
      <button onClick={() => handleDelete(food.id)}>Delete</button>
    </div>
  );
};

export default FoodBox;
