import { useReducer } from "react";
import { createContext } from "react";

let reviewStore = createContext({
  notesList: [],
  addNotes: () => {},
  deleteNotes: () => {},
  getNotes: () => {},
});
function useresducerFunction(state, action) {
  //   console.log(action);
  if (action.type === "getNotes") {
    console.log(action);
    return { notelist: action.data };
  }
}

let intialValues = {
  notesList: [],
};
export let ReviewStoreProvider = (props) => {
  let [storeNotes, setStoreNotes] = useReducer(
    useresducerFunction,
    intialValues
  );

  function addNotesData(values) {
    setStoreNotes({ type: "addNote", data: values });
  }
  function removeNotesData(values) {
    setStoreNotes({ type: "removeNotes", data: values });
  }
  function getNotesData(values) {
    setStoreNotes({ type: "getNotes", data: values });
  }

  return (
    <reviewStore.Provider
      value={{
        notesList: storeNotes.notelist,
        addNotes: addNotesData,
        deleteNotes: removeNotesData,
        getNotes: getNotesData,
      }}
    >
      {props.children}
    </reviewStore.Provider>
  );
};
export default reviewStore;
