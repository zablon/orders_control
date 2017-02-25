export default class OrderEditController {
    constructor(OrderApiService, $state, order) {
        this._orderApiService = OrderApiService;
        this._state = $state;
        this.order = order;
    }

    save() {
        this._orderApiService.edit(this.order).then(()=> {
            this._state.go('order-list')
        });
    }
}