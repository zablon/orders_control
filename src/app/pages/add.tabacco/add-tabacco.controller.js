export default class AddTabaccoController {
    constructor(SaveService, $state) {
        this._saveService = SaveService;
        this._state = $state;
        this._saveService.getTabacco();
    }

    setTabacco(form) {
        if (form.$valid) {
            this._saveService.saveTabacco(this.tabacco);
            this._state.go('finish');
        }
    }
}