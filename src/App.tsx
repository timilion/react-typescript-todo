import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TodosPage } from "./page/TodosPage";
import { AboutPage } from "./page/AboutPage";
import "materialize-css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} exact path="/" />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
