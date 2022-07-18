import React, { useContext } from 'react'
import './style.css'
import axios from 'axios'
import { updateContext } from '../App';

function DeleteTodo({id}) {
    const {apiCall,setApiCall} = useContext(updateContext);

    const deleteHandler = async ()=>{
        console.log(`delete api calling`, id);
        // const data = [...apiCall];
        const newTodo = apiCall.filter((data)=>{
          return data.id != id;
        })
        setApiCall(newTodo);

        await axios.delete(`http://localhost:4000/delete/${id}`);

        // const result = await axios.get('http://localhost:4000/todo')
        // setApiCall(result.data);
    }

  return (
    <div className='delete'>
        <button type="button"
        onClick={deleteHandler}
         className="btn btn-danger">
            Delete
        </button>
    </div>
  )
}

export default DeleteTodo