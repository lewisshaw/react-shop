import request from 'request';

var ProductsData = {
    getProducts: function(callback) {
        var products;
        request('http://localhost:1234/products.json', function(error, response, body) {
            if (body) {
                body = JSON.parse(body);
            }
            setTimeout(function() {
              callback(error, body)
            }, 2000);
        });
    }
};

module.exports = ProductsData;
