import "./index.css";
import { memo } from "react";

const ToDo = ({ todoData, onClick }) => {
  let { id, todo, day, hour, descrizione } = todoData;
  console.log(todo);
  return (
    <div className="list-container" key={id}>
      <div className="list">
        
        <div className="time-do">
          {" "}
          <h3>Giorno: </h3> <p>{day}</p>
          <h3>Ora: </h3> <p>{hour}</p>
        </div>
        <h3>Da fare: </h3> <p> {todo}</p>
        <h3>Descrizione : </h3>
        <p>{descrizione}</p>
        <button className="btn" id={id} onClick={(e) => onClick(e)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default memo(ToDo);
