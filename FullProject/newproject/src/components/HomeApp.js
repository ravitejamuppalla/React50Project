import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./HomeApp.module.css";

function HomeApp({ apps }) {
  console.log(apps);
  return (
    <Fragment>
      <main className={classes.mainHomePage}>
        <div className={classes.headers}>
          <h1 className={classes.mainHeading}>
            Practice and become pro as React Developer
          </h1>
          <h3 className={classes.subHeading}>
            You can practice More React concepts to grow as developer
          </h3>
        </div>
        <div className={classes.container}>
          {apps.map((appsDetails) => {
            return (
              <div className={classes.card} key={appsDetails.id}>
                <div className={classes.CardHeader}>
                  <h1>{appsDetails.AppName}</h1>
                </div>
                <div className={classes.CardDetails}>
                  <h2>{appsDetails.description}</h2>
                </div>
                <div className={classes.Cardfooter}>
                  <Link to={"/" + appsDetails.id}>Go To Application</Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Fragment>
  );
}

export default HomeApp;
