import Item from "./Item";
import { useState } from "react";

function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);
  const keyBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => keyBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
}
export default FoodItems;
