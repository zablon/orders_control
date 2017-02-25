export default function ($httpBackend, $window) {
    var orders = angular.fromJson($window.localStorage.getItem('orders')) || [];

    var id = 1;

    $httpBackend.whenGET('/api/orders').respond(200, orders);

    $httpBackend.whenGET(/^\/api\/orders\/\d+$/).respond(function (method, url, data, headers) {
        var regex = /^\/api\/orders\/(\d+)/g;

        var id = regex.exec(url)[1]; // First match on the second item.
        id = parseInt(id, 10);
        var order = null;
        for (var i = 0, l = orders.length; i < l; i++) {
            if (orders[i].id === id) {
                order = orders[i];
                break;
            }
        }

        return [order ? 200 : 404, order];
    });

    $httpBackend.whenPOST('/api/orders').respond(function (method, url, data, headers) {
        var now = new Date();
        var newItem = JSON.parse(data);
        newItem.orderId = newItem.type.substr(0, 1) + '-' + (now.getFullYear() % 100) + (now.getMonth() + 1) + (orders.filter(order => new Date(order.createDate).getMonth() == now.getMonth()).length + 1);
        newItem.id = id++;
        orders.push(newItem);
        $window.localStorage.setItem('orders', angular.toJson(orders));
        return [201, newItem];
    });

    $httpBackend.whenPUT(/^\/api\/orders\/\d+$/).respond(function (method, url, data, headers) {
        var item = JSON.parse(data);
        for (var i = 0, l = orders.length; i < l; i++) {
            if (orders[i].id === item.id) {
                orders[i] = item;
                break;
            }
        }

        $window.localStorage.setItem('orders', angular.toJson(orders));
        return [200, item];
    });

    $httpBackend.whenDELETE(/^\/api\/orders\/\d+$/).respond(function (method, url, data, headers) {
        var regex = /^\/api\/orders\/(\d+)/g;

        var id = regex.exec(url)[1]; // First match on the second item.
        id = parseInt(id, 10);
        for (var i = 0, l = orders.length; i < l; i++) {
            if (orders[i].id === id) {
                var index = orders.indexOf(orders[i]);
                orders.splice(index, 1);
                break;
            }
        }

        $window.localStorage.setItem('orders', angular.toJson(orders));
        return [204];
    });

    $httpBackend.whenGET(/\.html/).passThrough();
}