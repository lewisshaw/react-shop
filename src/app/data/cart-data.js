var localStorage = require('localStorage');

var CartData = {
    addItem: function(item) {
        var cartId = this.getCartId();
        if (null === cartId) {
            cartId = this.generateCartId();
        }
        //send request to API with cart Id
    },
    generateCartId: function() {
        var cartId = (Math.random() + 1).toString(36).substring(7);
        localStorage.setItem('cartId', cartId);
    },
    getCartId: function() {
        return localStorage.getItem('cartId');
    }
};

module.exports = CartData;
