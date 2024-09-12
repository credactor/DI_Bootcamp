function productSearch(product) {
const findObject = goods.find(function (item) {
        return item.name === product;
      });
if (findObject) {
      console.log(`${product}: ${findObject.category}, price = ${findObject.price}.`);
}
else {
    console.log(`There are no ${product}`);
}}

const goods = require('./products.js');

productSearch("Titanic");
productSearch("Soap");
productSearch("ThinkPad");