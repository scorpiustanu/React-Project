
import AppName from './components/AppName'
import Todo from './components/Todo'
import TodoDate from './components/TodoDate'
import './App.css'
import HealthyFood from './components/HealthyFood'
import TodoItems from './components/TodoItems'
function App() {
const todoItems=[
  {
    name:"Buy milk",
    date:"4-10-2023"
  },
  {
    name:"Go to College",
    date:"4-10-2023"
  },
  {
    name:"Sugar",
    date:"9-10-2023"
  }
]
  return (
    <>
  <center className="todo-container">
    <AppName></AppName>
    <Todo></Todo>
  <TodoItems todoItems={todoItems}></TodoItems>
    <TodoDate></TodoDate>
      </center>
<HealthyFood></HealthyFood>
    </>
  )
}

export default App
