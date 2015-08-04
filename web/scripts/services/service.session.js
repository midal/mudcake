'use strict';

import Cookies from 'cookies-js';
import projectService from './service.project.js';

const SESSION_TIMEOUT = 60 * 10;

/**
 * @name SessionService
 * @description Sessions
 */
class SessionService {

    constructor() {

    }

    /**
     * Create a session for a given project
     * @param  {String} projectId
     */
    createProjectSession(projectId) {
        Cookies.set('projectId', projectId, { expires: SESSION_TIMEOUT });
    }

    /**
     * Create a session for a given project
     * @param  {String} projectId
     */
    getProjectSession(projectId) {
        if (Cookies.get('projectId') === projectId) {
            return projectService.findProjectById(projectId);
        }
        let promise = new Promise(function(resolve, reject) {
            reject('No active session for project ' + projectId);
        });
        return promise;
    }
}

export default new SessionService();
