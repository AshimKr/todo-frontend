import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { updateContext } from '../App';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';

function TodoList() {
    const {apiCall,setApiCall} = useContext(updateContext);
    
    const [todo,setTodo] = useState([]);

    const getTodos = async () =>{
        const {data} = await axios.get('http://localhost:4000/todo');
        setApiCall([...data]);
        console.log('GET Method called');
    };
    
    useEffect(() => {
        setTodo(apiCall)
    }, [apiCall])

    useEffect(()=>{
        getTodos()
    },[]);
    {console.log(todo)}
    return (
        <div className='container mt-2'>
        <ul className="list-group">
                {
                    todo.map((todo,i)=>{
                        return <li key={i} className="d-flex list-group-item list-group-item-warning">
            
                            <div className="container">
                                <div className="row">
                                    <div className="col align-self-start">
                                        <h4>{todo.item}</h4>
                                    </div>
                                    <div className="col align-self-end">
                                        <span className=' align-self-end'><EditTodo id={todo.id}/></span>
                                        <span className=' align-self-end'><DeleteTodo id={todo.id}/></span>
                                        
                                    </div>
                                </div>
                            </div>
                            </li>
                      
                    })
                }
        </ul>
    </div>
  )
}

export default TodoList