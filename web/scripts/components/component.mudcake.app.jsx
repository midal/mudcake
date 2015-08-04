'use strict';

import React from 'react';
import MenuPage from './component.menu.page.jsx';


let MudcakeApp = React.createClass({
    getBackgoundImage: function() {
        return 'body-background--' + Math.round(Math.random() * 2);
    },
    getInitialState: function() {
        return {
            page: 'landing'
        };
    },
    render: function() {
        let body = window.document.getElementsByTagName('body')[0];
        if (this.state.page === 'menu') {
            body.className = '';
            return <MenuPage project={this.state.project} />;
        }
        else {
            body.classList.add(this.getBackgoundImage());
            return (
                <div className="landing-page">
                    <div className="container">
                        Welcome
                    </div>
                </div>
            );
        }
    }
});

export default MudcakeApp;
