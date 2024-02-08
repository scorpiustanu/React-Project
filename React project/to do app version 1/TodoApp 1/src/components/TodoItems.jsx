import Todoitem from "./Todoitem"
function TodoItems({todoItems}){
return ( 

<>  
 <div className="item-container">
    {todoItems.map(item =><Todoitem  todoDate={item.date} todoName={item.name}></Todoitem>)}
 
    </div>
    </>
)
}
export default TodoItems