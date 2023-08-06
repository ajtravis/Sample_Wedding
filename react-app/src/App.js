import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/HomePage"
import LocationPage from "./components/LocationPage"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation id="navs" isLoaded={isLoaded} />
      <div id="all-content">
      {isLoaded && (
        <Switch>
          <Route path="/rsvp">
            <SignupFormPage />
          </Route>
          <Route exact path="/location">
            <LocationPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      )}
      </div>
    </>
  );
}

export default App;
