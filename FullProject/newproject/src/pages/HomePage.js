import HomeApp from "../components/HomeApp";

const allApplications = [
  {
    id: "cafeMenu",
    AppName: "Cafe Menu",
    description: "This Application you will get to know the menu details",
  },
  {
    id: "cocktail",
    AppName: "CockTail Hub",
    description:
      "This Application you will get to know about the cocktail hub details",
  },
  {
    id: "reviewCorner",
    AppName: "Review Corner",
    description:
      "This Application you will get to know the Review Corner details",
  },

  {
    id: "wordLetterCount",
    AppName: "WordCount",
    description:
      "This Application you will get to know the wordLetterCount details",
  },
  {
    id: "budget",
    AppName: "Budget",
    description:
      "This Application you will get to know the Your budget details",
  },
  {
    id: "quiz",
    AppName: "Quiz",
    description: "This Application you will get to know the Your Quiz Details",
  },
];
function HomePage() {
  return <HomeApp apps={allApplications}></HomeApp>;
}
export default HomePage;
