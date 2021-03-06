import React from "react";
import routes from "../../constants/routes";
import {Route, Switch, useLocation} from "react-router";
import {UserContext} from "../../context";

const Router = () => {
    const location = useLocation();
    return (
        // <UserContext.Consumer>
            () => {
                return (
                  <Switch location={location} key={location.pathname}>
                      {routes.map(
                          ({component: Component, path, ...rest}) => {
                              return (
                                  <Route path={path} key={path} {...rest}>
                                      <Component {...rest} />
                                  </Route>
                              );
                          }
                      )}
                  </Switch>
                );
            }
        //</UserContext.Consumer>
    )
};

export default Router;