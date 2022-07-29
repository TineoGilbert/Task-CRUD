import React, {useState} from 'react'
import { handleSubmit } from './functions/handleSubmit';

const Edit = ({val, onUpdate, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false);

    const TodoList = () =>{
        return(
            <>
            <div className='card mt-4' style={{'alignItems':'stretch'}}>
                <div className='card-body card border-primary mb-3'>


            <h4>{val.task}
            <button onClick={() => setIsEdit(true)} className='btn btn-warning' style={{marginLeft:'15px'}}><b>Edit</b></button>
            <button onClick={(e) => onDelete(val.id)} className='btn btn-danger' style={{marginLeft:'15px'}}><b>Delete</b></button>
            </h4>
            
                </div>
            </div>
            </>
        );
    };

    const FormEdit = () =>{

        const [editForm, setEditForm] = useState(val.task);

        const handleChange = (e) =>{
            const change = e.target.value;
            setEditForm(change);
        };

        const handleUpdate = () =>{
            onUpdate(val.id, editForm);
            setIsEdit(false);
        };

        return(
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={editForm} className='form-control mb-2'/>
                <button onClick={handleUpdate} className='btn btn-success'>Update</button>
            </form>
        );
    };
  return (
    <div>
     {
        isEdit ? <FormEdit/> : <TodoList/>
     }
    </div>
  )
}

export default Edit