require('./global.css');

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import routing from './configs/routing';
import SaveService from './services/save.service';
import StorageService from './services/storage.service';

export default angular
    .module('hookah', [angularUiRouter])
    .config(routing)
    .service('SaveService', SaveService)
    .service('StorageService', StorageService);

