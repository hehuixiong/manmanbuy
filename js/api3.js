var productId = getSearch('productid');
console.log(productId);

$.get('http://139.199.192.48:9090/api/getproduct',{productid:productId},function(data){
    console.log(data);
    $("#pic").html(template('tpl',data.result));
    $("#mt").html(template('md',data.result));
});
$.get('http://139.199.192.48:9090/api/getproductcom',{productid:productId},function(data){
    console.log(data);
    $('#table').html(template('pinglun',data.result));
});
//首页api
$.get('http://139.199.192.48:9090/api/getindexmenu',function(data){
    console.log(data);
});


function getSearch(key){
    var searchSrt = location.search.slice(1); //把字符串中的指定位置的字符去掉
    var searchArr = searchSrt.split('&'); //把字符串中&符号之前的字符劈开变成数组
    var searchObj = {},tempArr;
    for(var i=0; i<searchArr.length; i++){
        tempArr = searchArr[i].split("=");  //把每一组字符串中=符号之前的字符劈开变成一组组的数组
        // console.log(tempArr)
        searchObj[tempArr[0]] = tempArr[1];
        // console.log(searchObj[key])
    }
    return key? searchObj[key] : searchObj;
}