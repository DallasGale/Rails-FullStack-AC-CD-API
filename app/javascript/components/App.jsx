import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Nav from "./nav";
// Pages
import DocsPage from "../pages/docs";
import PlaygroundPage from "../pages/playground";

const App = (props) => {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <aside>Side Bar</aside>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs" exact component={DocsPage} />
          <Route path="/playground" exact component={PlaygroundPage} />
          <Route path="/playground/album/:id" component={PlaygroundPage} />
        </Switch>
      </main>
    </Router>
  );
};
export default App;
