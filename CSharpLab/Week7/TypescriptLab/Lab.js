var _a;
var mountains = [];
var m1 = { name: "Kilimanjaro", height: 19341 };
mountains.push(m1);
var m2 = { name: "Everest", height: 29029 };
mountains.push(m2);
var m3 = { name: "Denali", height: 20310 };
mountains.push(m3);
var list = document.getElementById("MountainList");
for (var i = 0; i < mountains.length; i++) {
    list.innerHTML += "<p>Name:".concat(mountains[i].name, "</p>");
}
function findNameOfTallestMountain(mountains) {
    var mTallest = 0;
    var tallestName = "";
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > mTallest) {
            mTallest = mountains[i].height;
            tallestName = mountains[i].name;
        }
    }
    return tallestName;
}
var output = document.getElementById("Tallest");
output.innerText = "Tallest mountain is " + findNameOfTallestMountain(mountains);
var products = [];
var p1 = { name: "Apple", price: 5.99 };
products.push(p1);
var p2 = { name: "Orange", price: 10.99 };
products.push(p2);
var p3 = { name: "Grape", price: 8.99 };
products.push(p3);
console.log(products);
function calcAverageProductPrice(products) {
    var avg = 0;
    avg = (products[0].price + products[1].price + products[2].price) / products.length;
    return avg;
}
var p = calcAverageProductPrice(products);
var output2 = document.getElementById("AvgPrice");
output2.innerText = "avgPrice is : " + calcAverageProductPrice(products);
console.log(p);
var product1 = { name: "motor", price: 10.00 };
//products.push(product1);
var product2 = { name: "sensor", price: 12.50 };
//products.push(product1);
var product3 = { name: "LED", price: 1.00 };
//products.push(product3);
var inventoryItemArr = [];
var iArr1 = { product: product1, quantity: 10 };
inventoryItemArr.push(iArr1);
var iArr2 = { product: product2, quantity: 4 };
inventoryItemArr.push(iArr2);
var iArr3 = { product: product3, quantity: 20 };
inventoryItemArr.push(iArr3);
function calcInventoryValue(inventoryItemArr) {
    var total = 0;
    for (var i = 0; i < inventoryItemArr.length; i++) {
        total += inventoryItemArr[i].product.price * inventoryItemArr[i].quantity;
    }
    return total;
}
var value = calcInventoryValue(inventoryItemArr);
(_a = document.getElementById("Total")) === null || _a === void 0 ? void 0 : _a.innerText = "total price : " + value;
console.log(value);
