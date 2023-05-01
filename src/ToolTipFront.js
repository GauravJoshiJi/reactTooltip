import React from "react";
import Tooltip from "./Tooltip";
class ToolTipFront extends React.Component {
  render() {
    return (
      <>
        <button>ToolTip</button>
        <Tooltip
          className="toolTipText"
          text={"Thanks for hovering! I'm a toolTip"}
        >
          <span class="material-symbols-outlined">info</span>
        </Tooltip>
      </>
    );
  }
}

export default ToolTipFront;
