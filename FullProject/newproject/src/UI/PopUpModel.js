import { Fragment } from "react";
import classes from "./PopUpModel.module.css";
import { HiOutlineX } from "react-icons/hi";
import { FaBeer } from "react-icons/fa";

function PopUpModelCancelAndConfirm(props) {
  function buttonsData(event) {
    let buttontraget = false;
    console.log(event);
    console.log(event.target.innerHTML);
    if (event.target.innerHTML.includes("Confirm")) buttontraget = true;
    props.cancelOrConfrim(buttontraget);
  }

  return (
    <Fragment>
      <div className={classes.modal}>
        <div className={classes.overlay}>
          <div className={classes.modalcontent}>
            <div className={classes.modelBox}>
              <div>
                <HiOutlineX
                  className={classes.crossbutton}
                  onClick={buttonsData}
                >
                  Cross
                </HiOutlineX>

                <span>Are you sure do you wanna Delete?</span>
              </div>

              <div className={classes.buttons}>
                <button className={classes.buttonCancel} onClick={buttonsData}>
                  Cancel
                </button>
                <button className={classes.buttonConfirm} onClick={buttonsData}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default PopUpModelCancelAndConfirm;
