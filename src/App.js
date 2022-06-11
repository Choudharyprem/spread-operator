import React from "react";
import "./style.css";

export default function App() {
  // sperad operator es6
  let test=[1,2,3];
  let test2=[...test,"sunday"];
  console.log(test2)
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>{test2}</div>
    </div>
  );
}
