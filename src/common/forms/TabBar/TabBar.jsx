import "./TabBar.css";

export const TabBar = ({ onClick, first, last }) => {

  return (
    <label className="tab-bar">
      <input type="checkbox" onClick={onClick} />
      <div className="bg-action"></div>
      <div className="tab first">{first}</div>
      <div className="tab last">{last}</div>
    </label>
  );
};
