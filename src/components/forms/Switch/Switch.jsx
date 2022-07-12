import "./Switch.css";

export const Switch = ({ onClick, value }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        value={value}
        onClick={(e) => onClick(e)}
        className="input_hidden"
      />
      <span className="slider"></span>
    </label>
  );
};
