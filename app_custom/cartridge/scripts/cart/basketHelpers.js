'use strict';

/**
 * Adds product to the basket. 
 * If the product is already in the basket, then increases the quantity of
 * that product.
 * @param {} currentBasket - Current users's basket
 * @param {} product - the product being added to the basket
 * @param {number} quantity - the number of products to the basket
 * @param {} isNoStockCheckRequired - product stock check required
 *  @return {Object} returns an result object with 2 attribute (error and message)
 */
 function addProduct(currentBasket, product, quantity, isNoStockCheckRequired) {
     //TODO: write your code for adding product to basket




    
}

/**
 * return product object if it is already exist in basket
 * @param {string} productId - product identifier
 * @param {object} productLineItems - array of product line items
 * @return {object} product 
 */
function getExistingProductLineItemInBasket(productId, productLineItems) {
    //TODO: write your code



}

/**
 * return quantity if it is already exist in basket
 * @param {string} productId - product identifier
 * @param {object} productLineItems - array of product line items
 * @return {object} product quantity
 */
function getQtyAlreadyInBasket(productId, productLineItems) {
    //TODO: write your code 

}

/**
 * Adds a line item for this product to the basket
 *
 * @param {} currentBasket - user basket
 * @param {} product - product to add to basket
 * @param {number} quantity - quantity to add
 * @param {} defaultShipment - the basket's default shipment method
 * @return {} - The added product line item
 */
 function addLineItem(
    currentBasket,
    product,
    quantity,
    defaultShipment
) {
    //TODO: write your code



}

module.exports = {
    addProduct: addProduct,
    getExistingProductLineItemInBasket: getExistingProductLineItemInBasket,
    getQtyAlreadyInBasket: getQtyAlreadyInBasket
};
