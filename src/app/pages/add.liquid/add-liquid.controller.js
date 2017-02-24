export default class AddLiquidController {
    constructor(SaveService, $state) {
        this._saveService = SaveService;
        this._state = $state;
        this._saveService.getLiquid();
    }

    setLiquid(form) {
        if (form.$valid) {
            this._saveService.saveLiquid(this.liquid);
            this._state.go('tabacco');
        }
    }
}
