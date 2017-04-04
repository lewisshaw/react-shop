var localStorage = require('localStorage');
var request = require('request');

var CartData = {
    addItem: function(item) {
        var cartId = this.getCartId();
        if (!cartId) {
            this.createCart(function(error, cartId) {
                if (error) {
                    return;
                }
                request.post('http://localhost:8080/cart/' + cartId + '/products', {json: item});
            });
            return;
        }
        request.post('http://localhost:8080/cart/' + cartId + '/products', {json: item}, function(error, response, body){
            if (response.statusCode == 404) {
                localStorage.removeItem('cartId');
            }
        })
    },
    createCart: function(callback) {
        request.post('http://localhost:8080/cart', {json: {}}, function(error, response, body) {
            if (body) {
                localStorage.setItem('cartId', body.cartId);
                callback(error, body.cartId);
                return;
            }
            callback(error, null);
        });
    },
    getCartId: function() {
        return localStorage.getItem('cartId');
    },
    getCart: function(callback) {
        var cartId = this.getCartId();
        request('http://localhost:8080/cart/' + cartId, function(error, response, body) {
            if (body) {
                body = JSON.parse(body);
                var cart = body.cart;
                callback(error, cart);
                return;
            }
            callback(error, null);
        });
    },
    removeProduct: function(productId, callback) {
        var cartId = this.getCartId();
        var item = {
            productId: productId,
            quantity: 0
        };
        request.post('http://localhost:8080/cart/' + cartId + '/products', {json: item}, function(error, response, body) {
            callback(error)
        });
    }
};

module.exports = CartData;
