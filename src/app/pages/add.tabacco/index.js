import AddTabaccoCtrl from './add-tabacco.controller';

module.exports = {
    name:'tabacco',
    url: '/tabacco',
    template: require('./add-tabacco.html'),
    controller: AddTabaccoCtrl,
    controllerAs: 'vmAddTabacco'
};
