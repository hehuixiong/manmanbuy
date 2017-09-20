
var productId = getSearch('productid')
$.get('http://139.199.192.48:9090/api/getdiscountproduct', { productid: productId }, function(data) {
    $('#list_data').html(template('list_data_tpl', data.result));
});

//切割数据的方法
function getSearch(key) {
    var searchSrt = location.search.slice(1); //把字符串中的指定位置的字符去掉
    var searchArr = searchSrt.split('&'); //把字符串中&符号之前的字符劈开变成数组
    var searchObj = {},
        tempArr;
    for (var i = 0; i < searchArr.length; i++) {
        tempArr = searchArr[i].split("="); //把每一组字符串中=符号之前的字符劈开变成一组组的数组
        // console.log(tempArr)
        searchObj[tempArr[0]] = tempArr[1];
        // console.log(searchObj[key])
    }
    return key ? searchObj[key] : searchObj;
}
var back = document.querySelector("#Back");