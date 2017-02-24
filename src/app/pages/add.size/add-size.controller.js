export default class AddSizeController{
    constructor(SaveService, $state){
        this._saveService = SaveService;
        this._state = $state;
        this._saveService.getSize();
    }
    setSize(form){
        if(form.$valid) {
            this._saveService.saveSize(this.size);
            this._state.go('liquid');
        }
    }
}
