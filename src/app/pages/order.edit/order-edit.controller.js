export default class OrderEditController {
    constructor(OrderApiService, $state, order) {
        this._orderApiService = OrderApiService;
        this._state = $state;

        //this._saveService.getTabacco();
        this.order = order;
    }

    save() {
        this._orderApiService.edit(this.order).then((response)=> {
            this._state.go('order-list')
        });
    }

    //setTabacco(form) {
    //    if (form.$valid) {
    //        this._saveService.saveTabacco(this.tabacco);
    //        this._state.go('finish');
    //    }
    //}
}