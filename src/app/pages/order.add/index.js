import OrderAddCtrl from './order-add.controller';

module.exports = {
    name:'order-add',
    url: '/order-add',
    template: require('./order-add.html'),
    controller: OrderAddCtrl,
    controllerAs: 'vmOrder'

};
