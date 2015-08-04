'use strict';

import {expect} from 'chai';
import foodmenuService from '../../scripts/services/service.foodmenu.js';

describe('foodmenuService', () => {

    describe('#findMenuById', () => {

        it('should resolve promise with foodmenu when supplying correct id ', (done) => {
            let id = 'abc123';

            foodmenuService.findMenuById(id)
            .then(foodmenu => {
                expect(foodmenu).to.have.property('id', id);
            })
            .then(done).catch(done);
        });

        it('should reject promise when not supplying id', (done) => {
            foodmenuService.findMenuById()
            .then(done)
            .catch(error => {
                expect(error).to.be.instanceOf(Error);
                done();
            });
        });

        it('should reject promise when not supplying correct id', (done) => {
            foodmenuService.findMenuById('IncorrectID')
            .then(done)
            .catch(error => {
                expect(error).to.be.instanceOf(Error);
                done();
            });
        });

    });

});
