export default
class OrderAddController {
    constructor(OrderApiService, $state) {
        this._orderApiService = OrderApiService;
        this._state = $state;
        //this._saveService.getTabacco();
        this.order = {};
    }

    save(form) {
        if (form) {
            this._orderApiService.create(this.order).then(() => {
                this._state.go('order-list')
            });
        }
        return;
    }
}