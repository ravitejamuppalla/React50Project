import classes from "./ReviewCornerHome.module.css";
import React, { useRef, useState } from "react";
import { customAlphabet } from "nanoid";
import useHttp from "../../hooks/useHttp";
import reviewStore from "../../store/reviewCorner-Store";
import { getTodayData } from "../utils/ApplicationUtils";

function AddNotes(props) {
  const taskInputRef = useRef();
  const [isTotalWordCount, setTotalWordCount] = useState(500);
  function publishResults() {
    let inputResultsData = taskInputRef.current.value;
    const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);
    let nanoIDData = nanoid();
    let creatingObject = {
      id: nanoIDData,
      reviewCode: inputResultsData,
      data: getTodayData(),
    };
    props.addNotedData(creatingObject);
    taskInputRef.current.value = "";
    setTotalWordCount(500);
  }

  function reviewDataValues(e) {
    let inputData = taskInputRef.current.value;
    setTotalWordCount(500 - inputData.length);
  }
  return (
    <div className={classes.addNoteCard}>
      <textarea
        rows="10"
        cols="20"
        onChange={reviewDataValues}
        ref={taskInputRef}
        className={classes.reviewData}
      ></textarea>

      <div className={classes.cardFooter}>
        <div>{isTotalWordCount} Left</div>
        <div className={classes.addReview}>
          <div onClick={publishResults}>Publish</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={classes.arrowUp}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AddNotes;
