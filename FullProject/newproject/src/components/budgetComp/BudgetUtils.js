export let getBudgetNames = (datalist) => {
  let budgetData = [];
  if (datalist && datalist.length > 0)
    for (const key in datalist[0]) {
      let getNewbudget = datalist[0][key].newBudget.name;

      budgetData.push(getNewbudget);
    }
  return budgetData;
};
export let getIDWithName = (datalist, name) => {
  if (datalist && datalist.length > 0)
    for (const key in datalist[0]) {
      if (datalist[0][key].newBudget.name === name) return key;
    }
};

export let getObjectWithID = (datalist, id) => {
  if (datalist && datalist.length > 0)
    for (const key in datalist[0]) {
      if (key === id) return datalist[0][key];
    }
};

export let isNamePresentInList = (arrayList, findName) => {
  return arrayList.filter((data) => {
    return data === findName;
  });
};
