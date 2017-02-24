import 'angular-mocks';

export default function routing($stateProvider, $urlRouterProvider, $locationProvider, $qProvider, $provide) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state(require('../pages/home'))
        .state(require('../pages/order.list'))
        .state(require('../pages/order.add'))
        .state(require('../pages/order.edit'));
    $locationProvider.html5Mode(true);
    $qProvider.errorOnUnhandledRejections(false);
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}

