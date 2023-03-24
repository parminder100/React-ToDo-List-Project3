import "../TodoButton/TodoButton.css";

const TodoButton = ({todo, index, removeTodo, markTodo}) =>{
    return(
        <>
            <div className="todo-data">
                <span className="todo-text" style={{textDecoration: todo.isDone ? "line-through" : ""}}>{todo.text}</span>
                <div>
                    <i class="fa fa-check-circle" onClick={()=>markTodo(index)} aria-hidden="true"></i>
                    <i class="fa fa-trash" onClick={()=>removeTodo(index)}></i>
                </div>
            </div>
        </>
    )
}
export default TodoButton;