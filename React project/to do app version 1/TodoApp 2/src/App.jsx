import AppName from "./components/AppName";
import TodoDate from "./components/TodoDate";
import "./App.css";
import AddTodo from "./components/AddTodo";
import HealthyFood from "./components/HealthyFood";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currvalue) => [
      ...currvalue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}> </AddTodo>

        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}

        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
        <TodoDate></TodoDate>
      </center>
      <HealthyFood></HealthyFood>
    </>
  );
}

export default App;
