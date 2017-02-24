import HomeCtrl from './home.controller';

module.exports = {
    name:'home',
    url: '/home',
    template: require('./home.html'),
    controller: HomeCtrl,
    controllerAs: 'vmHome'
};
