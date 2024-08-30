import { ToastContainer, toast } from "react-toastify";
export let getTodayData = () => {
  try {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  } catch (error) {
    throw new Error("Failed to get Date " + error);
  }
};

export let getTodayDateTime = () => {
  try {
    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " : " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    return datetime;
  } catch (error) {
    throw new Error("Failed to get Date " + error);
  }
};

export let SucessMessageTroster = (Message, Seconds = 1000) => {
  toast.success(Message, {
    position: "top-right",
    autoClose: Seconds,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export let ErrorMessageTroster = (Message, Seconds) => {
  toast.error(Message, {
    position: "top-right",
    autoClose: Seconds,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
