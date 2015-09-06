'use strict';

import React from 'react';
import LandingPage from './components/component.landing.page.jsx';
import MenuPage from './components/component.menu.page.jsx';

import Router from 'react-router';

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="/">Hem</Link></li>
                        <li><Link to="menu">Meny</Link></li>
                    </ul>
                </header>

                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="menu" handler={MenuPage}/>
        <DefaultRoute handler={LandingPage}/>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
