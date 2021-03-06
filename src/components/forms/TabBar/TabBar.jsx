import "./TabBar.css";

export const TabBar = ({ onClick, value, first, last }) => {
  return (
    <label className="tab-bar">
      <input type="checkbox" onClick={(e) => onClick(e)} value={value} />
      <div className="bg-action"></div>
      <div className="tab first">{first}</div>
      <div className="tab last">{last}</div>
    </label>
  );
};
