// var shopid, areaid;
// 各店铺数据渲染
$.get("http://139.199.192.48:9090/api/getgsshop", function (data) {
  $("#mall1-list").html(template("mall1-list-tpl", data.result));
  // shopid = $("#shop").attr("data-id");
  console.log(data)
  //调用点击京东得到对应的更改
  initpare($("#mall1-list li"), 0);
});
//各地区数据渲染
$.get("http://139.199.192.48:9090/api/getgsshoparea", function (data) {
  $("#region-list").html(template("region-list-tpl", data.result));
  // areaid = $("#areaid ").attr("data-id");
  console.log(data)
  //调用点击地区得到对应的更改
  initpare($("#region-list li"), 1);
});
var shopid = getSearch("shopid");
var areaid = getSearch("areaid");
console.log(shopid,areaid)
// 商品数据的模板
$.get('http://139.199.192.48:9090/api/getgsproduct', {
  shopid: shopid||0,
  areaid: areaid||0
}, function (data) {
  $("#item-list").html(template("item-list-tpl", data.result));
  // console.log(data)
})

//点击顶部菜单栏弹出选框
$('#btn-list li').each(function (index) {
  $(this).click(function () {
    // $('.coudan-box .list .search').removeClass('on');
    // $('.coudan-box .list .popsearch').hide();	
    // $(this).toggleClass('on').siblings().removeClass("on");
    // $(this).children().children().toggleClass('icon-jiantoushang').siblings().removeClass("icon-jiantouxia");
    $(this).parents(".hd").find('.popbox').eq(index).toggleClass("on").siblings().removeClass("on");
  })
})


function initpare(dom, eq) {
  dom.each(function (index) {
    $(this).click(function () { //this是当前的li元素
      $(this).parent().find('.popbox').toggle();
      $(this).toggleClass('on');
      // 点击更新头部文本
      var text = $(this).children().text(); //保存了京东
      $(this).parents(".hd").find("#btn-list").children().children().eq(eq).children("span").text(text)
    })
  })
}
// 点击价格更改对应的价格
initpare($("#price-list li"), 2);


//获取当前页面的search值
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