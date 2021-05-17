import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import List from "../List";
import Select from "../Select";

export default class Test extends Component {
  render() {
    return (
      <div>
        <NavLink
          activeStyle={{
            color: "gold",
          }}
          to="/a"
        >
          List
        </NavLink>
        <NavLink
          activeStyle={{
            color: "blue",
          }}
          to="/b"
        >
          Select
        </NavLink>
        <Switch>
          <Route path="/a" component={List} />
          <Route path="/b" component={Select} />
          <Redirect to="/a" />
        </Switch>
      </div>
    );
  }
}
