export default class OrderApiService {
    constructor($http) {
        this._http = $http;
        this._baseUrl = '/api/orders';
    }

    create(order) {
        return this._http.post(this._baseUrl, order);
    }

    getAll() {
        return this._http.get(this._baseUrl);
    }

    getById(id){
        return this._http.get(this._baseUrl + '/' + id);
    }

    edit(order){
        return this._http.put(this._baseUrl + '/' + order.id, order);
    }

    remove(id){
        return this._http.delete(this._baseUrl + '/' + id)
    }
}
