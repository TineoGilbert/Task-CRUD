import React, { useState } from "react";
import Edit from "./Edit";
import { handleSubmit } from "./functions/handleSubmit";

const Form = () => {
  const [initial, setInitial] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const change = e.target.value;
    setInitial(change);
  };

  const handleAdd = () => {
    const newValues = {
      id: crypto.randomUUID(),
      task: initial,
    };

    const insertValues = [...items];
    insertValues.unshift(newValues);
    setItems(insertValues);
    setInitial("");

    
  };

  const handleUpdate = (id, value) => {
    const update = [...items];
    const newUpdate = update.find((it) => it.id === id);
    newUpdate.task = value;
    setItems(update);
  };

  const handleDelete = (id) => {
    const deleteItem = items.filter((it) => it.id != id);
    setItems(deleteItem);
  };

  return (
    <div
      className="container"
      style={{ marginRight: "70px", marginTop: "80px", alignContent: "center" }}
    >
      <div className="row align-items-start">
        <div className="col"></div>
        <div className="col">
          <form onSubmit={handleSubmit}>
            <input
              required
              onChange={handleChange}
              type="text"
              value={initial}
              placeholder={"New Task"}
              className="form-control"
              style={{ marginBottom: "15px" }}
            />
            <button onClick={handleAdd} className="btn btn-primary">
              Add Task
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>

      <div className="row align-items-start" style={{ marginTop: "40px" }}>
        <div className="col"></div>
        <div className="col">
          <div>
            {items.map((val) => (
              <Edit
                key={val.id}
                val={val}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Form;

/*

<form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={initial} placeholder={'New Task'}/>
        <button onClick={handleAdd} className='btn btn-info'>Add</button>
     </form>

*/

/*
<div >
        {
            items.map((val) => (
                <div key={val.id}>
                    <h1>{val.task}</h1>
                </div>
            ))
        }
     </div>
*/
