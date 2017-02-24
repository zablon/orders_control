import AddSizeCtrl from './add-size.controller';

module.exports = {
    name:'size',
    url: '/size',
    template: require('./add-size.html'),
    controller: AddSizeCtrl,
    controllerAs: 'vmAddSize'
};

