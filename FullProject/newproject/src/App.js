import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CafeMenu from "./pages/CafeMenuPages/CafeMenu";
import HomePage from "./pages/HomePage";
import ListOfMenuDetails from "./components/cafeMenuComp/ListOfMenuDetails";
import CockTailHome from "./components/cockTailComp/CockTailHome";
import CockTailItem from "./components/cockTailComp/CockTailItem";
import CockTail from "./pages/CockTailPages/Cocktail";
import ReviewCorner from "./pages/ReviewCornerPages/ReviewCorner";
import ReviewCornerHome from "./components/reviewCornerComp/ReviewCornerHome";
import WordAndLetterCount from "./pages/WordAndLetterPages/WordAndLetterCount";
import WordLetterCounter from "./components/wordLetterCounter/WordLetterCounter";
import Budget from "./pages/BudgetPages/Budget";
import BudgetHome from "./components/budgetComp/BudgetHome";
import AddNewBudget from "./components/budgetComp/AddNewBudget";
import AddExpenses from "./components/budgetComp/AddExpenses";
import ViewExpenses from "./components/budgetComp/ViewExpenses";
import QuizPage from "./pages/QuizPage/QuizPage";
import QuizHome from "./components/quiz/QuizHome";

const routerData = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "cafeMenu",
    element: <CafeMenu></CafeMenu>,
    children: [
      {
        path: ":cafeFilter",
        element: <ListOfMenuDetails></ListOfMenuDetails>,
      },
    ],
  },

  {
    path: "cocktail",
    element: <CockTail></CockTail>,
    children: [
      {
        index: true,
        element: <CockTailHome></CockTailHome>,
      },
      {
        path: ":cockTailID",
        element: <CockTailItem></CockTailItem>,
      },
    ],
  },
  {
    path: "reviewCorner",
    element: <ReviewCorner></ReviewCorner>,
    children: [
      {
        index: true,
        element: <ReviewCornerHome></ReviewCornerHome>,
      },
    ],
  },
  {
    path: "wordLetterCount",
    element: <WordAndLetterCount></WordAndLetterCount>,
    children: [
      {
        index: true,
        element: <WordLetterCounter></WordLetterCounter>,
      },
    ],
  },
  {
    path: "budget",
    element: <Budget></Budget>,
    children: [
      {
        path: "addNewBudget",
        element: <AddNewBudget></AddNewBudget>,
      },
      {
        path: "addExpenses",
        element: <AddExpenses></AddExpenses>,
      },
      {
        path: ":budgetName",
        element: <AddExpenses></AddExpenses>,
      },
      {
        path: "ViewExpenses/:viewExpenses",
        element: <ViewExpenses></ViewExpenses>,
      },
    ],
  },
  {
    path: "quiz",
    element: <QuizPage></QuizPage>,
    children: [
      {
        index: true,
        element: <QuizHome></QuizHome>,
      },
      {
        path: "quizQuestions",
        element: <AddExpenses></AddExpenses>,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={routerData}>
      <div></div>
    </RouterProvider>
  );
}

export default App;
