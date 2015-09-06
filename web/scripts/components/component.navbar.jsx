'use strict';

import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

let NavBar = React.createClass({
    render: function() {
        return (
            <nav>
                <ul className="list-inline">
                    <li><Link to="/">Hem</Link></li>
                    <li><Link to="menu">Meny</Link></li>
                </ul>
            </nav>
        );
    }
});

export default NavBar;
