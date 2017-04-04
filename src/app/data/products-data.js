import request from 'request';

var ProductsData = {
  getProducts: function(callback) {
    request('http://localhost:8080/products', function(error, response, body) {
      if (body) {
        body = JSON.parse(body);
      }

      callback(error, body)
    });
  },
  getProduct: function(id, callback) {
    request('http://localhost:8080/products/' + id, function(error, response, body) {
      if (body) {
        body = JSON.parse(body);
      }

      callback(error, body)
    });
  }
};

module.exports = ProductsData;
