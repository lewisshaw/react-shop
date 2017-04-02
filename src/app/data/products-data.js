import request from 'request';

var ProductsData = {
  getProducts: function(callback) {
    request('http://localhost:1234/products.json', function(error, response, body) {
      if (body) {
        body = JSON.parse(body);
      }
      setTimeout(function() {
        callback(error, body)
      }, 100);
    });
  },
  getProduct: function(id, callback) {
    request('http://localhost:1234/products.json', function(error, response, body) {
      if (body) {
        body = JSON.parse(body);
        var product = body.find(function(product) {
          return product.id == id;
        });
      }
      setTimeout(function() {
        callback(error, product)
      }, 100);
    });
  }
};

module.exports = ProductsData;
