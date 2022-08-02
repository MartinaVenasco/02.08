import "./index.css";



const Form = ({ state, onChange, children }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="task-input">
      <h2>Aggiungi attività</h2>
      <label>Cose da fare</label>
      <input type="text" name="todo" onChange={handleChange} />
      <br />
      <label>Giorno</label>
      <input type="text" name="day" onChange={handleChange} />
      <br />
      <label>Ora</label>
      <input type="text" name="hour" onChange={handleChange} />
      <br />
      <label>Descrizione</label>
      <input type="text" name="descrizione" onChange={handleChange} />
      {state.isError ? (
        <p className="message message--error">
          <strong>ERRORE</strong> : Non hai riempito alcuni campi!
        </p>
      ) : null}
      <br />

      {children}
    </div>
  );
};

export default Form;
