// function HealthyFood(){
//     let foodItems=['Dal','Green VegetableRoti','Salad','MIlk']
// // let foodItems=[]
// let emptyMessage=foodItems.length===0?<h3>I am still hungry</h3>:null;
//     return (
//     <>

//      <h1>Healthy Food</h1>
//     {foodItems.length===0?<h3>I am still hungry</h3>:null}
//     <ul className="list-group">
//         {foodItems.map(item =><li key={item} className="list-group-item">{item}</li> )}

//     </ul>
//     // Another method for ternary operator
//     <h1>Healthy Food</h1>
//     {emptyMessage}
//     <ul className="list-group">
//         {foodItems.map(item =><li key={item} className="list-group-item">{item}</li> )}

//     </ul>
//     // Another method is logical operator
//     <h1>Healthy Food</h1>
//     {foodItems.length===0 && <h3>I am still hungry</h3>}
//     <ul className="list-group">
//         {foodItems.map(item =><li key={item} className="list-group-item">{item}</li> )}

//     </ul>

//     </>
// )
// }

import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";
import Container from "./Container";
import { useState } from "react";
function HealthyFood() {
  let [foodItems, setFoodItems] = useState([
    "SBJI",
    "Green VegetableRoti",
    "Salad",
    "MIlk",
  ]);

  let [textToShow, setText] = useState("Enter Food Item Here");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newItems = [...foodItems, event.target.value];
      event.target.value = "";
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <input
          type="text"
          placeholder="Enter Food Item Here"
          onKeyDown={handleKeyDown}
        />
        <p>{textToShow}</p>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default HealthyFood;
