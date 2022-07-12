import "./Add.css";

export const Add = ({onClick}) => {
  return (
    <button className="btn add" onClick={onClick}>
      <span class="material-icons">add</span>
    </button>
  );
};
