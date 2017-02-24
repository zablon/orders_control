import OrderEditCtrl from './order-edit.controller';

module.exports = {
    name:'order-edit',
    url: '/order-edit/:id',
    template: require('../order.add/order-add.html'),
    controller: OrderEditCtrl,
    controllerAs: 'vmOrder',
    resolve: {
        order: (OrderApiService,$stateParams) => OrderApiService.getById($stateParams.id).then(res => {
            res.data.createDate = new Date(res.data.createDate);
            res.data.completeDate= new Date(res.data.completeDate);
            return res.data
        })
    }
};
