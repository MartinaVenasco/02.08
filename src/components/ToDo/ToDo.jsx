import './index.css'
import { memo } from 'react';


const ToDo = ({ todoData, onClick }) => {
  let { id, todo, day, hour, descrizione } = todoData;
console.log(todo)
  return (
    <div className="list-container" key={id}>
      <div className="list">
        <h3>Da fare: {todo}</h3>
        <h3>Giorno: {day}</h3>
        <h3>Ora: {hour} </h3>
        <h3>Descrizione : {descrizione}</h3>
        <button className="btn" id={id} onClick={(e) => onClick(e)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default memo(ToDo)