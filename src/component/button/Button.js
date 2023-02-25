import React from "react";
import colors from "../../colors";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: colors.body,
          backgroundColor: colors.text,
          border: `solid 1px ${colors.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, colors.text, colors.body)}
        onMouseOut={(event) => onMouseOut(event, colors.body, colors.text)}
      >
        {text}
      </a>
    </div>
  );
}

export default Button;