import React, { useEffect, useState } from "react";
import classes from "./WordLetterCounter.module.css";

function WordLetterCounter() {
  const [textenetered, setTextEntered] = useState("");
  const [isPreviewText, setPerviewText] = useState("");
  function fucntionParagraph(event) {
    let inputTextDetail = event.target.value;
    console.log(inputTextDetail);
    setTextEntered(inputTextDetail);
    setPerviewText(inputTextDetail);
  }
  function fucntionUpppercase() {
    setTextEntered((data) => data.toUpperCase());
  }

  function fucntionLowercase() {
    setTextEntered((data) => data.toLowerCase());
  }

  return (
    <div className={classes.MainContainer}>
      <div className={classes.container}>
        <div className={classes.applicationHeading}>
          <h1>Word Counter</h1>
        </div>
        <div className={classes.counters}>
          <div className={classes.counterContiner}>
            <div className={classes.CounterHeading}>Word</div>
            <div className={classes.wordCOunt}>
              {textenetered.length === 0 ? "" : textenetered.split(" ").length}
            </div>
          </div>
          <div className={classes.counterContiner}>
            <div className={classes.CounterHeading}>Letters</div>
            <div>{textenetered.length === 0 ? "" : textenetered.length}</div>
          </div>
          <div className={classes.counterContiner}>
            <div className={classes.CounterHeading}>Paragraph</div>
            <div>
              {textenetered.length === 0
                ? ""
                : textenetered.split(/\r\n|\r|\n/).length}
            </div>
          </div>
        </div>
        <div className={classes.paragraph}>
          <textarea
            placeholder="Enter/ paste you text Here"
            onChange={fucntionParagraph}
            value={textenetered}
          ></textarea>
        </div>
        <div className={classes.contenetCoversion}>
          <button onClick={fucntionUpppercase}>Click to Uppercase</button>
          <button onClick={fucntionLowercase}>Click to LowerCase</button>
        </div>
        <div className={classes.preview}>
          <div className={classes.previewName}>Preview</div>
          <p>{isPreviewText}</p>
        </div>
      </div>
    </div>
  );
}

export default WordLetterCounter;
