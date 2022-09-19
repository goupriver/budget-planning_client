import "./String.css";

import { Icon } from "common/media";
import { Chart } from "./Chart";

export const String = () => {
  return (
    <>
      <Chart />
      <div className="btn_wrapper">
        <button className="btn_zoom">
          <h4>Zoom</h4>
          <Icon variant="btn_icon">remove</Icon>
        </button>
      </div>
    </>
  );
};
