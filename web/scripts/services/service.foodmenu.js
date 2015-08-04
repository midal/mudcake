'use strict';

import FoodMenu from '../models/model.foodmenu.js';
import FoodMenuItem from '../models/model.foodmenu.item.js';

const MENUS = [
    {
        id         : 'abc123',
        name       : 'Menu #1',
        description: ''
    },
    {
        id         : 'xyz789',
        name       : 'Menu #2',
        description: ''
    }
];

const MENU_ITEMS = [
    {
        description: 'Lorem ipsum.',
        id         : '10',
        name       : 'Google',
        foodmenuId : 'abc123'
    },
    {
        description: 'Lorem ipsum.',
        id         : '11',
        name       : 'Apple',
        foodmenuId : 'abc123'
    },
    {
        description: 'Lorem ipsum.',
        id         : '20',
        name       : 'Tactel',
        foodmenuId : 'xyz789'
    }
];

/**
 * @name FoodMenuService
 * @description Handle menus (food)
 */

class FoodMenuService {
    constructor() {
        this.menus = MENUS.map(p => {
            return new FoodMenu(p.name, p.id, p.description);
        });

        MENU_ITEMS.map(item => {
            this.findMenuById(item.foodmenuId)
            .then(project => {
                project.addItem(new FoodMenuItem(item.name,
                                                 item.id,
                                                 item.description,
                                                 item.foodmenuId));
            });
        });
    }

    /**
     * @param  {String} id FoodMenu id
     * @return {Promise}   Promise that resolves with found FoodMenu
     */
    findMenuById(id) {
        let promise = new Promise((resolve, reject) => {
            for (let menu of this.menus) {
                if (menu.id === id) {
                    resolve(menu);
                    return;
                }
            }
            reject(new Error('Found no matching Menu'));
        });

        return promise;
    }

}

export default new FoodMenuService();
