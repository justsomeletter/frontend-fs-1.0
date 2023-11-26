import FormInput from "./FormInput";
import "../components-style/modal.css";

function Modal({open,onClose}) {
  if(!open) return null
  return (
    <div onClick={onClose} className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
      <h1>Please enter below details</h1>
      <form action="" className="modal">
        <FormInput label="Fire Truck No." placeholder="Reg No. plate" />
        <FormInput
          label="Fitness Certificate "
          placeholder="Date"
          type="date"
        />
        <FormInput label="PUC " placeholder="Date" type="date" />
        <FormInput label="Insurance " placeholder="Date" type="date" />
        <FormInput
          label="Remarks "
          placeholder="Enter any remarks"
          type="text"
        />
        <FormInput label="Certificate " placeholder="cf" type="file" />
        <FormInput value="Submit" type="button" />
      </form>
    </div>
  </div>
  );
}

export default Modal;
