import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { updateContext } from '../App';
import './style.css'

function EditTodo({id}) {
    const [editData,setEditData] = useState('');
    const [getId,setGetId] = useState(null);
    const closebtn = useRef(null);

    const {setApiCall} = useContext(updateContext);

    const editTodoHandler =  () =>{
        console.log('in updater function', getId);
        axios.put(`http://localhost:4000/updatetodo/${getId}`,{
            id: getId,
            item : editData
        }).then(re=>{setApiCall(re)})
        
        closebtn.current.click();
    }
    
    {console.log('in return',getId)}
    return (
        <div className='edit'>
        <button
        type="button"
        onClick={()=>{setGetId(id)}}
         className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
            Edit
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="input-group mb-3">
                <input type="text"
                onChange={(e)=>{setEditData(e.target.value)}}
                 className="form-control" 
                 placeholder="" 
                 aria-label="Example text with button addon" 
                 aria-describedby="button-addon1" />
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" ref={closebtn} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button 
                onClick={editTodoHandler}
                 type="button" 
                 className="btn btn-primary" >update change</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EditTodo