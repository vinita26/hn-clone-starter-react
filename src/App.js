import React, { useState } from "react";
import Header from './Components/header';
import Footer from './Components/footer';
import News from "./Components/News";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';

const App = () => {
  const [isLoading, setLoadingState] = useState(true);

  const showLoader = () => {
    setLoadingState(true);
  };
  const hideLoader = () => {
    setLoadingState(false);
  };

  return (
    // <Router>
    <center>
      <table id="hnmain">
        <tbody>
          <tr>
            <Header showLoader={showLoader} />
          </tr>
          <tr>
            <News
              isLoading={isLoading}
              hideLoader={hideLoader}
              showLoader={showLoader}
            />
            {/* <Switch> */}
            {/* <>
              <Route
                exact
                key="home"
                path="/"
                render={() => (
                  <News
                    isLoading={isLoading}
                    hideLoader={hideLoader}
                    showLoader={showLoader}
                  />
                )}
              />
              <Route
                key="new"
                path="/new"
                render={() => (
                  <News
                    isLoading={isLoading}
                    hideLoader={hideLoader}
                    showLoader={showLoader}
                  />
                )}
              />

            </> */}
            {/* </Switch> */}
          </tr>
          <tr>
            <Footer />
          </tr>
        </tbody>
      </table>
    </center>


    // </Router>
  );
};

export default App;