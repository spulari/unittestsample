'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var basketHelper = require('../app_custom/cartridge/scripts/cart/basketHelpers.js');

// Inventory mock object
var availabilityModelMock = {
    inventoryRecord: {
        perpetual: false,
        ATS: {
            value: 100
        }
    }
};

// Product mock object
var product = {
    UUID: 'a1b2c3',
    productId: '123',
    availabilityModel: availabilityModelMock,
    quantity: {
        value: 1
    },
    setQuantityValue: function (quantity) {
        return;
    },
    quantityValue: 1
};

// product line item mock object
var productLineItemMock = {
    UUID: 'a1b2c3',
    productId: '123',
    product: product,
    quantity: 1,
    setQuantityValue: function (quantity) {
        return;
    },
    quantityValue: 1
};

// current basket mock object
var currentBasket = {
    productItems: [],
    productLineItems: function () {
        return productItems;
    },
    createProductLineItem: function (product, productLineItems) {
        return;
    },
    defaultShipment: {}
}

var productArray = [productLineItemMock];

// current basket with item mock object
var currentBasketWithItem = {
    productItems: productArray,
    productLineItems: function () {
        return productItems;
    },
    createProductLineItem: function (product, productLineItems) {
        return;
    },
    defaultShipment: {}
}

/**
 * basket helper test cases
 * 1. Test if product can be added basket
 * 2. Test if product quantity are updated if already in basket
 * 3. Test if addProduct fail if stock available less than quantity requested
 */
describe('basketHelpers Test', () => {

    it('should add a product to the basket', function () {
        var spy = sinon.spy(currentBasket, 'createProductLineItem');
        spy.withArgs(1);

        basketHelper.addProduct(currentBasket, product, 1, false);
        assert.isTrue(spy.calledOnce);
    });

    it('should set the quantity of the product in the basket', function () {
        var spy = sinon.spy(currentBasketWithItem.productItems[0], 'setQuantityValue');
        spy.withArgs(1);

        basketHelper.addProduct(currentBasketWithItem, product, 1, false);
        assert.isTrue(spy.calledOnce);
    });

    it('should not add a product to the basket when ATS is already in basket', function () {
        var result = basketHelper.addProduct(currentBasket, product, 200, false);
        assert.isTrue(result.error);
    });

});