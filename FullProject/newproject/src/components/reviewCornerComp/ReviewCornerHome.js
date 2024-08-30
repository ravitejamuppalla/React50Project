import { Fragment, useState, useRef } from "react";
import classes from "./ReviewCornerHome.module.css";
import useHttp from "../../hooks/useHttp";
import { customAlphabet } from "nanoid";
import Notes from "./Notes";
import AddNotes from "./AddNotes";
import { useEffect, useContext } from "react";
import reviewStore from "../../store/reviewCorner-Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopUpModelCancelAndConfirm from "../../UI/PopUpModel";
import { BiBrightnessHalf } from "react-icons/bi";
import { BiBrightness } from "react-icons/bi";

function ReviewCornerHome() {
  const addReviewNoteSucess = () =>
    toast.success("Sucessfully Added Review", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const removeReviewNote = () =>
    toast.success("Sucessfully Remove Review", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  let inputSearchText = useRef();
  let { isLoading, iserror: error, sendRequest } = useHttp();
  const [postNoteResults, setNoteResults] = useState();
  const [delteNoteResults, setSeleteNotesResults] = useState();
  const loaderData = [];
  const contextStoreData = useContext(reviewStore);
  const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);
  let nanoIDData = nanoid();
  const [inputTextData, setINputText] = useState();
  const [toggleDeltePopUp, setToggleDeltePopUp] = useState(false);
  const [isDeleteID, setDeleteID] = useState("");
  const [isChangedBrightness, setChangedBrightness] = useState(true);

  function inputsearchFilter(e) {
    const inputtext = e.target.value;
    setINputText(inputtext);
    console.log(contextStoreData.notesList);
  }

  function notesDataFromResponse(notesResults) {
    // console.log(notesResults);
    for (const notesKey in notesResults) {
      loaderData.push({
        id: notesResults[notesKey].text.id,
        date: notesResults[notesKey].text.data,
        notes: notesResults[notesKey].text.reviewCode,
        fireBaseID: notesKey,
      });
    }
    // console.log(loaderData);
    contextStoreData.getNotes(loaderData);
  }
  function notesPostDataFromReponse(data) {
    setNoteResults(data);
    addReviewNoteSucess();
  }
  useEffect(() => {
    console.log(
      "https://learningreact-f5a3c-default-rtdb.firebaseio.com/reviewCorner.json"
    );
    let requestconfig = {
      url: "https://learningreact-f5a3c-default-rtdb.firebaseio.com/reviewCorner.json",
    };
    sendRequest(requestconfig, notesDataFromResponse);
  }, [postNoteResults, delteNoteResults]);

  function notesData(notes) {
    let requestconfig = {
      url: "https://learningreact-f5a3c-default-rtdb.firebaseio.com/reviewCorner.json",
      method: "POST",
      body: JSON.stringify({ text: notes }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    sendRequest(requestconfig, notesPostDataFromReponse);
  }
  function notesDeleteDataFromReponse(data) {
    console.log(data);
    setSeleteNotesResults(nanoIDData);
    removeReviewNote();
  }
  function deleteNote(deleteObject) {
    setDeleteID(deleteObject.fireBaseID);
    setToggleDeltePopUp(!toggleDeltePopUp);
  }

  function conformationDetails(details) {
    if (details) {
      let requestconfig = {
        url:
          "https://learningreact-f5a3c-default-rtdb.firebaseio.com/reviewCorner/" +
          isDeleteID +
          ".json",
        method: "DELETE",
      };
      sendRequest(requestconfig, notesDeleteDataFromReponse);
    }
    setToggleDeltePopUp(!toggleDeltePopUp);
  }

  //Search filter code
  let filteredData = [];
  console.log(contextStoreData.notesList);
  if (contextStoreData.notesList) {
    if (!inputTextData) {
      filteredData = contextStoreData.notesList;
    } else {
      filteredData = contextStoreData.notesList.filter((valuesdata) => {
        return valuesdata.notes.includes(inputTextData);
      });
    }
  }

  function brightNessdetails(data) {
    setChangedBrightness(!isChangedBrightness);
  }

  return (
    <Fragment>
      {/* <div
        className={`${
          isChangedBrightness ? classes["inValid"] : classes["Valid"]
        }`}
      > */}
      <div className={`${classes["mainContainer"]} `}>
        <div className={classes.headingDetails}>
          <span className={classes.heading}>Reviews Corner</span>
          <button onClick={brightNessdetails}>
            {isChangedBrightness ? (
              <BiBrightness className={classes.brightNessLight}></BiBrightness>
            ) : (
              <BiBrightnessHalf
                className={classes.darkNessLight}
              ></BiBrightnessHalf>
            )}
          </button>
        </div>
        <input placeholder="Search here.." onChange={inputsearchFilter}></input>
        {toggleDeltePopUp && (
          <PopUpModelCancelAndConfirm
            cancelOrConfrim={conformationDetails}
          ></PopUpModelCancelAndConfirm>
        )}
        <div className={classes.reviewCards}>
          {filteredData.map((dataStore) => {
            return (
              <Fragment>
                <Notes
                  searchText={inputTextData}
                  notesset={dataStore}
                  deleteNotesReturn={deleteNote}
                ></Notes>
              </Fragment>
            );
          })}
          <AddNotes addNotedData={notesData}></AddNotes>
        </div>
        <ToastContainer />
        <ToastContainer />
      </div>
      {/* </div> */}
    </Fragment>
  );
}

export default ReviewCornerHome;
