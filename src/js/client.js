import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./components/About";
import Contacts from "./components/Contacts";
import Layout from "./components/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About}></IndexRoute>
      <Route path="contacts" component={Contacts}></Route>

    </Route>
  </Router>,
app);
