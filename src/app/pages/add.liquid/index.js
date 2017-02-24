import AddLiquidCtrl from './add-liquid.controller';

module.exports = {
    name:'liquid',
    url: '/liquid',
    template: require('./add-liquid.html'),
    controller: AddLiquidCtrl,
    controllerAs: 'vmAddLiquid'
};