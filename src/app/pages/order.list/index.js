import OrderListCtrl from './order-list.controller';

module.exports = {
    name: 'order-list',
    url: '/order-list',
    template: require('./order-list.html'),
    controller: OrderListCtrl,
    controllerAs: 'vmOrderList',
    resolve: {
        orders: OrderApiService => OrderApiService.getAll().then(response=> {
            let data = response.data;
            for(let i = 0 ;i < data.length; i++) {
                data[i].createDate = new Date(data[i].createDate);
                data[i].completeDate= new Date(data[i].completeDate);
            }
            return data;
        })
    }
};