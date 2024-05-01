import React from "react";

const FoodItem = ({ food, addToCart }) => {
    return (
        <div>
            <p>{food.name} - ${food.price}</p>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
        </div>
    );
};

export default FoodItem;
