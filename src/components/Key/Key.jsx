import React from "react";
import classNames from "classnames";
import "./style.css";

function Key(props) {
  const { value, colored, sum, equals, clear, zero, handleClick } = props;
  const btnClass = classNames({
    btn: true,
    colored,
    sum,
    zero,
    clear,
    equals
  });
  
  function sendInput() {
    handleClick(value);
  }

  return (
    <div className={btnClass} onClick={sendInput}>
      <span>{value}</span>
    </div>
  );
}

export default Key;
