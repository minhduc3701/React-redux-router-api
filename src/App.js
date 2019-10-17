import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import routes from "./routes";

class App extends React.Component {
  showContentMenus = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Router>
        <Menu></Menu>
        <div className="container">
          <div className="row">{this.showContentMenus(routes)}</div>
        </div>
      </Router>
    );
  }
}

export default App;
