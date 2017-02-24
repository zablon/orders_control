export default class OrderListController {
    constructor(OrderApiService, orders, $interval, $scope) {
        this._orderApiService = OrderApiService;
        this.orders = orders;
        this._3days = 1000 * 60 * 60 * 24 * 3; //ms in 3 days
        $interval(() => $scope.$apply(), 60000); // 1 minute update time
    }

    remove(order) {
        this._orderApiService.remove(order.id).then(()=>{
            this.orders.splice(this.orders.indexOf(order), 1);
        })
    }

    expired3Days(date) {
        return new Date() - date < this._3days;
    }

}
