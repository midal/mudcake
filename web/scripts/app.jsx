'use strict';

import React from 'react';
import LandingPage from './components/component.landing.page.jsx';
import MenuPage from './components/component.menu.page.jsx';
import AccommodationPage from './components/component.accommodation.page.jsx';
import NavBar from './components/component.navbar.jsx';

import Router from 'react-router';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
    render: function () {
        return (
            <div>
                <NavBar/>
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="menu" handler={MenuPage}/>
        <Route name="accommodation" handler={AccommodationPage}/>
        <DefaultRoute handler={LandingPage}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
