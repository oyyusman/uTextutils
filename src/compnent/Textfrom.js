import React, { useState } from "react";
// --useState is the react hook we can learn more from react documentation
export default function Textfrom(props) {
  // these are called arrow function
  const handleupClick = () => {
    let textcn = text.toUpperCase();
    setText(textcn);
    props.showAlert("Converted to upper case", "success");
  };
  const handleloclick = () => {
    let textcn = text.toLowerCase();
    setText(textcn);
    props.showAlert("Converted to lower case", "danger");
  };
  const handlemeclick = () => {
    let textc = text
      .split(" ")
      .filter((s) => s)
      .join(" ");
    setText(textc);
    props.showAlert("Extra spaces removed", "success");
  };
  const handleticlick = () => {
    let copytext = document.getElementById("exampleFormControlTextarea1");
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytext.value);
    props.showAlert("text copied: ", "danger");
  };
  const handleonChange = (event) => {
    console.log("handle was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text="set text"  wrong way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "White",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            onChange={handleonChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleupClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success my-1"
          onClick={handleloclick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-1"
          onClick={handleticlick}
        >
          Copy the text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handlemeclick}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>your Text summary</h1>
        {/* /\s+/ are called regular expression */}
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
