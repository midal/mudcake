'use strict';

import {expect} from 'chai';
import FoodMenuItem from '../../scripts/models/model.foodmenu.item.js';

/*eslint-disable no-unused-expressions */
describe('FoodMenuItem', () => {
    let foodmenuItemName = 'Test Item';
    let foodmenuItemId = '1';
    let foodmenuItemDescription = 'Lorem Ipsum';
    let foodmenuId = 'abc123';

    let foodmenu = new FoodMenuItem();

    it('should be a FoodMenuItem', () => {
        expect(foodmenu).to.be.an.instanceOf(FoodMenuItem);
    });

    it('should set default properties', () => {
        expect(foodmenu.name).to.equal('');
        expect(foodmenu.id).to.equal(-1);
        expect(foodmenu.description).to.equal('');
        expect(foodmenu.foodmenuId).to.equal(-1);
    });

    it('should set foodmenu item properties if provided', () => {
        foodmenu = new FoodMenuItem(foodmenuItemName,
                                  foodmenuItemId,
                                  foodmenuItemDescription,
                                  foodmenuId);

        expect(foodmenu.name).to.equal(foodmenuItemName);
        expect(foodmenu.id).to.equal(foodmenuItemId);
        expect(foodmenu.description).to.equal(foodmenuItemDescription);
        expect(foodmenu.foodmenuId).to.equal(foodmenuId);
    });

});
/*eslint-enable no-unused-expressions */
