'use strict';

/**
 * @name FoodMenu
 * @description FoodMenu model
 */
export default class FoodMenu {
    /**
     * @param  {String} name          FoodMenu name
     * @param  {Number} id            FoodMenu id
     * @param  {String} description   FoodMenu description
     * @param  {FoodMenuItem[]} items  Array with links asociated with the FoodMenu
     * @return {FoodMenu}
     */
    constructor(name = '', id = -1, description = '', items = []) {
        this.id = id;
        this.description = description;
        this.items = items;
        this.keyes = [];
        this.name = name;
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

}
