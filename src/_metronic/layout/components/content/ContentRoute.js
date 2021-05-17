import React from "react";
import {Route} from "react-router-dom";
import {Content} from "./Content";
import {useSubheader} from "../../_core/MetronicSubheader";

export function ContentRoute({ children, component, render, ...props }) {
   const suhbeader = useSubheader();
   suhbeader.setTitle(props.title);
  return (
    <Route {...props}>
      {routeProps => {
        if (typeof children === "function") {
          return <Content>{children(routeProps)}</Content>;
        }

        if (!routeProps.match) {
          return null;
        }

        if (children) {
          return <Content>{children}</Content>;
        }

        if (component) {
          return (
            <Content>{React.createElement(component, routeProps)}</Content>
          );
        }

        if (render) {
          return <Content>{render(routeProps)}</Content>;
        }

        return null;
      }}
    </Route>
  );
}
