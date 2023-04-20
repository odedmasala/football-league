import React from "react";
import LeagueTabs from "./components/leagueTabs/LeagueTabs";
import "./style/app.scss";
const App: React.FC = () => {
  return (
    <>
      <div className="html-container">
        <div className="header-container">
          <img
            className="uefa-logo"
            src="https://1000logos.net/wp-content/uploads/2022/01/UEFA-logo.png"
            alt="EEFA logo"
          />
          <h1>Europa Leagues</h1>
        </div>
        <div className="body-container">
          <LeagueTabs />
        </div>
      </div>
    </>
  );
};

export default App;
