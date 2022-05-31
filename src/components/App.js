import React, { useEffect, useState } from "react";
import "../styles.css";
import Button from "./Button";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todo: "Submit CV", completed: false, timeLeftInHours: 0 },
    { todo: "Attent Phone Screen", completed: false, timeLeftInHours: 30 },
    { todo: "Complete Coding Excercise", completed: false, timeLeftInHours: 2 }
  ]);

  useEffect(() => {
    todos.forEach((ele, index) => {
      if (ele.timeLeftInHours <= 0) {
        todos.unshift(todos.splice(index, 1)[0]);
      }
    });
    setTodos([...todos]);
  }, []);

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleOnClick = () => {
    if (todo) {
      setTodos([...todos, { todo, completed: false, timeLeftInHours: 30 }]);
      setTodo("");
    }
  };

  const handleDelete = (e, i) => {
    setTodos(todos.filter((ele, index) => i !== index));
  };

  const handleMoveToTop = (e, i) => {
    const filteredData = todos.filter((ele, index) => i !== index);
    filteredData.unshift(todos[i]);
    setTodos(filteredData);
  };

  const handleComplete = (e, i) => {
    setTodos(
      todos.map((ele, index) => {
        return i === index ? { ...ele, completed: true } : ele;
      })
    );
  };

  return (
    <div className="App-container">
      <h1 className="title">Recruitment Process</h1>
      <input placeholder="todo" value={todo} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Add</button>

      {todos.map((ele, index) => (
        <div
          className={`todo-container ${
            ele.timeLeftInHours < 24 && "timeLeftInHoursWarning"
          }`}
        >
          <div className={`todo-title ${ele.completed && "lineThr"}`}>
            {ele.todo}
          </div>

          <div className="right-section">
            {ele.timeLeftInHours > 0 ? (
              <div>{ele.timeLeftInHours} hrs left</div>
            ) : (
              <div className="expired">Expired</div>
            )}
            <div>
              <Button
                buttonName="Delete"
                onClick={(e) => handleDelete(e, index)}
              />
              <Button
                buttonName="Move to top"
                onClick={(e) => handleMoveToTop(e, index)}
              />
              <Button
                buttonName="Completed"
                onClick={(e) => handleComplete(e, index)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
