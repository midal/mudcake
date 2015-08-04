'use strict';

import {expect} from 'chai';
import FoodMenu from '../../scripts/models/model.foodmenu.js';

/*eslint-disable no-unused-expressions */
describe('FoodMenu', () => {
    let foodmenuName = 'Test foodmenu';
    let foodmenuId = 'abc123';
    let foodmenuDescription = 'Lorem Ipsum';
    let item = {test: true};

    let foodmenu = new FoodMenu();

    it('should be a FoodMenu', () => {
        expect(foodmenu).to.be.an.instanceOf(FoodMenu);
    });

    it('should set default properties', () => {
        expect(foodmenu.name).to.equal('');
        expect(foodmenu.id).to.equal(-1);
        expect(foodmenu.description).to.equal('');
        expect(foodmenu.items).to.be.empty;
    });

    it('should set foodmenu properties if provided', () => {
        foodmenu = new FoodMenu(foodmenuName,
                              foodmenuId,
                              foodmenuDescription,
                              [item]);

        expect(foodmenu.name).to.equal(foodmenuName);
        expect(foodmenu.id).to.equal(foodmenuId);
        expect(foodmenu.description).to.equal(foodmenuDescription);
        expect(foodmenu.items).to.contain(item);
    });

    describe('#addItem', () => {
        beforeEach(() => {
            foodmenu = new FoodMenu();
        });

        it('should be able to add an item', () => {
            foodmenu.addItem(item);
            expect(foodmenu.items).to.contain(item);
        });
    });

    describe('#addItem', () => {
        beforeEach(() => {
            foodmenu = new FoodMenu(undefined, undefined, undefined, [item]);
        });

        it('should be able to remove an item', () => {
            expect(foodmenu.items).to.contain(item);
            foodmenu.deleteItem(item);
            expect(foodmenu.items).to.not.contain(item);
        });
    });

});
/*eslint-enable no-unused-expressions */
