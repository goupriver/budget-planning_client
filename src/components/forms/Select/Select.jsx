import { useState } from "react";

import "./Select.css";

export const Select = ({type = "radio"}) => {
  const category = {
    'Bills': 'description',
    'Food': 'local_pizza',
    'Clothes': 'checkroom',
    'Transport': 'drive_eta',
    'Fun': 'videogame_asset',
    'Other': 'file_present'
  } 

  const [selectCategory, setSelectCategory] = useState('')

  return (
    <form className="categories">
      {Object.entries(category).map(([text, ico]) => (
        <label className="category__item" key={text}>
          <input type={type} name="category" value={text} onClick={e => setSelectCategory(e.target.value)}/>
          <div className="wrap_icon_text">
            <span className="icon material-icons">{ico}</span>
            <h4 className="text">{text}</h4>
          </div>
        </label>
      ))}
    </form>
  );
};
