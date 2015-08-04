'use strict';

/**
 * @name FoodMenuItem
 * @description FoodMenuItem model
 */
export default class FoodMenuItem {
    /**
     * @param  {String} name          FoodMenuItem name
     * @param  {Number} id            FoodMenuItem id
     * @param  {String} description   FoodMenuItem description
     * @param  {String} foodmenuId     Project ID
     * @return {FoodMenuItem}
     */
    constructor(name = '', id = -1, description = '', foodmenuId = -1) {
        this.description = description;
        this.id = id;
        this.name = name;
        this.foodmenuId = foodmenuId;
    }

}
