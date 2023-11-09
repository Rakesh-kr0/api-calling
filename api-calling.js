var inputProductId = document.getElementById('inputProductId');
var searchProductId = document.getElementById('searchProductId');
var imgProductId = document.getElementById('imgProductId');
var tdTitle = document.getElementById('tdTitle');
var tdPrice = document.getElementById('tdPrice');
var tdBrand = document.getElementById('tdBrand');
var tdCatogry = document.getElementById('tdCatogry');




function searchProduct_click() {

    var url = `https://dummyjson.com/products/${inputProductId.value}`;
    var method = "GET"
    getProductByApiCall(url, method);
}

function getProductByApiCall(url, method) {
    var request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onload = callBackAfterResopnse;
    request.send()
}
function callBackAfterResopnse() {
    var responseData = this.responseText;
    var jsObject = JSON.parse(responseData);
    tdTitle.innerHTML = jsObject.title;
    tdPrice.innerHTML = jsObject.price;
    tdBrand.innerHTML = jsObject.brand;
    tdCatogry.innerHTML = jsObject.category;
    imgProductId.src = jsObject.thumbnail;


}