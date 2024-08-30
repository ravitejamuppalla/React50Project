import React, { createContext, useReducer } from "react";

const storeContext = createContext({
  cocktailList: [],
  items: [],
});
let intialvalues = {
  items: [],
};
function cocktailReducer(state, action) {
  let getcocktailList = [];
  if (action.type === "AddData") {
    if (action.data) getcocktailList.push(...action.data);
    else getcocktailList.push(null);
  }
  console.log(getcocktailList);
  return { items: getcocktailList };
}

export let StoreCockTail = (props) => {
  const [cocktailListData, setcocktailList] = useReducer(
    cocktailReducer,
    intialvalues
  );
  function cocktailData(objectValue) {
    setcocktailList({ type: "AddData", data: objectValue });
    console.log(objectValue);
  }
  return (
    <storeContext.Provider
      value={{
        cocktailList: cocktailData,
        items: cocktailListData,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};
export default storeContext;
