import FinishCtrl from './finish.controller';

module.exports = {
    name:'finish',
    url: '/finish',
    template: require('./finish.html'),
    controller: FinishCtrl,
    controllerAs: 'vmFinish'
};
