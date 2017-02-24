require('./global.css');

import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import routing from './configs/routing';
import Backend from './configs/backendmock';
import SaveService from './services/save.service';
import OrderApiService from './services/order.api.service';

export default angular
    .module('hookah', [angularUiRouter])
    .config(routing)
    .run(Backend)
    .service('SaveService', SaveService)
    .service('OrderApiService', OrderApiService);

