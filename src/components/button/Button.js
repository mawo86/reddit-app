import React from "react";
import "./Button.css";

export default function Button(props) {
  if (props.primary === "active") {
    return <button className="primary hoverable">Button</button>;
  } else {
    return <button className="secondary hoverable">Button2</button>;
  }
}
