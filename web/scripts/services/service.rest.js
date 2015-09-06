'use strict';

import http from 'axios';

const API_BASE = 'http://localhost:5000/api';

/**
 * @name RestService
 * @description Handle menus (food)
 */

class RestService {
    constructor() {
    }

    /**
     * @param  {String} id FoodMenu id
     * @return {Promise}   Promise that resolves with found FoodMenu
     */
    get(endpoint) {
        return http.get(API_BASE + endpoint);
    }

}

export default new RestService();
