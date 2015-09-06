'use strict';

import React from 'react';
import restService from '../../services/service.rest.js';

let LandingPage = React.createClass({
    getInitialState: function() {
        return {'user': ''};
    },
    componentDidMount: function() {
        restService.get('/users/1')
        .then(function(response) {
            console.log(response);
            this.setState({'user': response.data.name});
        });
    },
    render: function() {
        return (
            <div className="landing-page">
                <div className="container">
                    <h1>Välkommen</h1>
                    {this.state.user}
                </div>
            </div>
        );
    }
});

export default LandingPage;
