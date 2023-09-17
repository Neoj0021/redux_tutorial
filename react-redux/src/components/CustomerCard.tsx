import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodtoCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();

  const handleAddFoodToCustomer = () => {
    if (!customerFoodInput) return;

    dispatch(
      addFoodtoCustomer({
        customerId: id,
        food: customerFoodInput,
      })
    );
    setCustomerFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      {name}
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((foodName) => {
            return <p>{foodName}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={() => handleAddFoodToCustomer()}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
