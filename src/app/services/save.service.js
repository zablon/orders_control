export default class SaveService {
    constructor() {
        this.clearHookah();
    }

    saveSize(size) {
        this.hookah.size = size;
    }

    saveLiquid(liquid) {
        this.hookah.liquid = liquid;
    }

    saveTabacco(tabacco) {
        this.hookah.tabacco = tabacco;
    }

    saveName(name) {
        this.hookah.name = name;
    }

    clearHookah() {
        this.hookah = {
            size: null,
            liquid: null,
            tabacco: null,
            name: null
        };
    }

    getHookah() {
        return this.hookah;
    }

    getSize() {
        return this.hookah.size;
    }

    getLiquid() {
        return this.hookah.liquid;
    }

    getTabacco() {
        return this.hookah.tabacco;
    }
    getName() {
        return this.hookah.name;
    }
}
