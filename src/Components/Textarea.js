import React, { useState } from "react";

function Textarea(props) {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleUpText = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowText = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case", "success");
  };

  const clearText = () => {
    setText("");
  };

  const handleCopy = () => {
    var copyText = document.getElementById("text");
    copyText.select();
    // copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleWhiteSpaces = () => {
    let newTex = text.split(/[ ]+/);
    setText(newTex.join(" "));
    props.showAlert("Removed All Spaces", "success");
  };

  return (
    <>
      <div className="container">
        <h2
          className={` mt-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h2>
        <textarea
          className="form-control mt-3"
          onChange={handleText}
          id="text"
          value={text}
          placeholder="Enter Your Text Here..."
          rows="10"
          style={{ backgroundColor: props.mode === "light" ? "white" : "gray" }}
        ></textarea>
        <div className="d-flex justify-content-around mb-3">
          <button className="btn btn-primary mt-2 " onClick={handleUpText}>
            To UpperCase
          </button>
          <button className="btn btn-primary mt-2 " onClick={handleLowText}>
            To LowerCase
          </button>

          <button className="btn btn-primary mt-2 " onClick={handleCopy}>
            Handle Copy
          </button>
          <button className="btn btn-primary mt-2 " onClick={handleWhiteSpaces}>
            Remove White Spaces
          </button>
          <button className="btn btn-primary mt-2 " onClick={clearText}>
            To Clear Text
          </button>
        </div>
      </div>
      <div className="container">
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Your Text Summary
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.trim().split(" ").length} words and {text.trim().length} letters
        </p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {0.008 * text.trim().split(" ").length} Minutes Read
        </p>
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Preview
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.toLowerCase()}
        </p>
      </div>
    </>
  );
}

export default Textarea;
