import "./Switch.css";

export const Switch = ({ name, type, register }) => {
  return (
    <label className="switch">
      <input
        type={type}
        name={name}
        {...register(name)}
        className="input_hidden"
      />
      <span className="slider"></span>
    </label>
  );
};
