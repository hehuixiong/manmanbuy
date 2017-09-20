$(function () {
  
  var shop = 0;
  var area = 0;
  // 各店铺数据渲染
  $.get("http://139.199.192.48:9090/api/getgsshop", function (data) {
    $("#mall1-list").html(template("mall1-list-tpl", data.result));
    //调用点击京东得到对应的更改
    initpare($("#mall1-list li"), 0);
    // 点击商家获取当前元素的data-id属性,然后传参获取对应的数据
    $("#mall1-list li").on("click", function () {
      shop = $(this).attr("data-id");
      render(shop, area);
    });
  });
  //各地区数据渲染
  $.get("http://139.199.192.48:9090/api/getgsshoparea", function (data) {
    $("#region-list").html(template("region-list-tpl", data.result));
    //调用点击地区得到对应的更改
    initpare($("#region-list li"), 1);
    $("#region-list li").on("click", function () {
      area = $(this).attr("data-id");
      render(shop, area);
    });
  });
  render()//不传参代表默认的-0-0页.....
  function render(shop, area) {
    // 商品数据的模板
    $.get('http://139.199.192.48:9090/api/getgsproduct', {
      shopid: shop||0,
      areaid: area||0
    }, function (data) {
      $("#item-list").html(template("item-list-tpl", data.result));
    })
  }

})


//点击顶部菜单栏弹出选框
$('#btn-list li').each(function (index) {
  $(this).click(function () {
    // $('.coudan-box .list .search').removeClass('on');
    // $('.coudan-box .list .popsearch').hide();	
    $(this).toggleClass('on').siblings().removeClass("on");
    /* 点击切换上下箭头 */
    $(this).children().children("i").toggleClass("icon-jiantouxia").toggleClass("icon-jiantoushang");
    // $(this).children().children().toggleClass('icon-jiantoushang').siblings().removeClass("icon-jiantouxia");
    $(this).parents(".hd").find('.popbox').eq(index).toggleClass("on").siblings().removeClass("on");
  })
})


function initpare(dom, eq) {
  // 各种下拉列表点击事件
  dom.each(function (index) {
    $(this).click(function () { //this是当前的li元素
      $(this).parent().find('.popbox').toggle();
      $(this).toggleClass('on').siblings().removeClass("on");
      if(!$(this).hasClass("on")){
        $(this).toggleClass("on");
      }
      // 点击下拉列表之后,把其隐藏
      $(this).parent().parent().toggleClass("on");
      // 点击更新头部文本
      var text = $(this).children().text(); //保存了当前点击的文本
      $(this).parents(".hd").find("#btn-list").children().children().eq(eq).children("span").text(text)
      /* 点击切换上下箭头 */
      $(this).parents(".hd").find("#btn-list").children().children().eq(eq).children("i").toggleClass("icon-jiantouxia").toggleClass("icon-jiantoushang");
    })
  })
}
// 点击价格更改对应的价格
initpare($("#price-list li"), 2);


$(document).ajaxStart(function(){
  $(".auto-loading").show();
});
$(document).ajaxStop(function(){
  $(".auto-loading").hide();
});

// 点击回到顶部
$("#returnTop,.returnTop").on("click", function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
});