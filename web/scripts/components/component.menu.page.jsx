'use strict';

import React from 'react';

let MenuPage = React.createClass({
    render: function() {
        let items = this.props.foodmenu.items.map(item => {
            return (
                <li className="foodmenu__item" key={item.id}>
                    <h2 className="foodmenu__item__title">{item.name}</h2>
                    <div className="foodmenu__item__description">{item.description}</div>
                </li>
            );
        });

        return (
            <div>
                <div className="container">
                    <h1 className="foodmenu__title">{this.props.foodmenu.name}</h1>
                </div>
                <div className="container">
                    <h1>Welcome</h1>
                    <ul>{items}</ul>
                </div>
            </div>
        );
    }
});

export default MenuPage;
