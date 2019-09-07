import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Auth from "./Auth/Auth";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";


function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                true ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/auth",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}
function Navigation() {

    return (
        <Router>
            <Route path="/auth" component={Auth} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
        </Router>
    );

}

export default Navigation;
