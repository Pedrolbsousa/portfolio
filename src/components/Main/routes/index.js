import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Main from "../Pages/Home";
import Project from "../Pages/project";

const Routes = () => {
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/Project" component={Project} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
  </Switch>;
};
export default Routes;
