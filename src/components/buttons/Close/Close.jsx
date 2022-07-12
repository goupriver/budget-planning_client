import './Close.css'

export const Close = ({ onClick, variant }) => {
  return (
    <button className={"btn close " + variant} onClick={onClick}>
      <span class={"material-icons " + variant}>close</span>
    </button>
  );
};
