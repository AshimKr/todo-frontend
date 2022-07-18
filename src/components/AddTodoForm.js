import React, { useContext, useState } from "react";
import axios from 'axios';
import { updateContext } from "../App";

function AddTodoForm() {
    const [data,setData] = useState('');
    const {apiCall,setApiCall} = useContext(updateContext);

    const formController = async () =>{
        const result = await axios.post('http://localhost:4000/addtodo',{
            id: Math.random(),
            item: data
        });
        setApiCall([...apiCall,result.data]);
        setData('')
    }

  return (
    <div className="container bg-dark p-2 rounded mt-2">
      <div className="mb-3">
        
        <label htmlFor="exampleFormControlinput1" className="form-label text-light">
          Add New Todo
        </label>
        <input
          className="form-control"
          value={data}
          onChange={(e)=>{setData(e.target.value)}}
          id="exampleFormControlinput1"
          placeholder="Add Item"
        ></input>
      </div>
      <div >
        <button type="submit" onClick={formController} className="btn btn-primary mb-3">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddTodoForm;
