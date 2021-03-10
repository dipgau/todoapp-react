import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Add } from "@material-ui/icons";
import { Input, TextField } from "@material-ui/core";

const Todo = () => {
  const todoLists = [
    {
      id: 1,
      todoItem: "Learn React",
      checked: false,
    },
    {
      id: 2,
      todoItem: "Play Guitar",
      checked: false,
    },
    {
      id: 3,
      todoItem: "Learn Language",
      checked: false,
    },
  ];
  const [state, setstate] = useState(todoLists);
  let newItem = {
    id: null,
    todoItem: " ",
    checked: false,
  };

  const getItem = (e) => {
    newItem.todoItem = e.target.value;
    newItem.id = state.length + 1;
  };

  const addItem = () => {
    setstate([...state, newItem]);
    console.log(newItem.todoItem + " " + newItem.id);
  };

  const deleteItem = (item) => {
    // setstate(state.filter((it) => it !== item));
    const newState = [...state];
    const pos = state.indexOf(item);
    newState.splice(pos, 1);
    setstate([...newState]);
  };

  const checkboxClicked = (e, id) => {
    console.log(e.target.checked);
    const el = state.findIndex((elem) => elem.id === id);
    const newTaskList = [...state];
    newTaskList[el].checked = e.target.checked;

    setstate(newTaskList);
  };

  return (
    <div className="todo-item">
      <h3 className="h3-todo">ToDo-List</h3>
      <div className="items">
        <Input placeholder="Add Item" onChange={getItem} />
        <IconButton color="primary" onClick={addItem}>
          <Add />
        </IconButton>
        {state.map((item, id) => {
          return (
            <div className={`${item.checked ? "checked" : ""}`} key={id}>
              <input
                type="checkbox"
                onClick={(e) => checkboxClicked(e, item.id)}
              />
              {item.todoItem}
              <IconButton
                className="button"
                color="secondary"
                onClick={() => deleteItem(item)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
