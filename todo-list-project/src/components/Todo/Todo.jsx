import { useState } from "react";
import TodoButton from "../TodoButton/TodoButton";
import "../Todo/Todo.css";

const TodoList = () =>{
    const [inputdata, setInputData] = useState("");

    const [todo, setTodo] = useState([
        {
            text: "Egg",
            isDone: false
        }
    ])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!inputdata) return;
        addTodo(inputdata);
        setInputData("");
    }

    const addTodo = (text) =>{
        const newTodo = [...todo, {text}];
        setTodo(newTodo);
    }

    const removeTodo = (index) =>{
        const deleteTodo = [...todo];
        deleteTodo.splice(index,1);
        setTodo(deleteTodo);
    }

    const markTodo = (index) =>{
        const doneTodo = [...todo];
        doneTodo[index].isDone = true;
        setTodo(doneTodo);
    }
    return(
        <>
            <div className="main-content">
                <div className="todo-content">
                    <div className="input-content">
                        <input className="input-data" placeholder="Enter the todo" type="text" value={inputdata} onChange={(e)=>setInputData(e.target.value)} />
                        <button className="todo-submit-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="todo-list">
                        {
                            todo.map((todo, index)=>{
                                return(
                                    <TodoButton
                                        key = {index}
                                        index = {index}
                                        todo = {todo}
                                        removeTodo = {removeTodo}
                                        markTodo = {markTodo} 
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoList;