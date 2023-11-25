import "../components-style/formInput.css";

function FormInput(props) {
  //console.log(props.placeholder); // passing data from parent to child

  if (props.type == "button") {
    return (
      <div className="formInput">
        <input type={props.type} value={props.value} />
      </div>
    );
  } else {
    return (
      <div className="formInput">
        <label htmlFor="">{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    );
  }
}

export default FormInput;
