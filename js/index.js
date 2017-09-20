/**
 * 导航分类-数据渲染
 */
$.get("http://139.199.192.48:9090/api/getindexmenu", function (data) {
  console.log(data)
  $("#nav-classify-row").html(template("nav-classify-tpl", data.result));
  //点击更多收缩
  $(document).on("click", "a", function () {
    var data_id = $(this).attr("data-id");
    if (data_id == 7) {
      //点击移除class,再次点击添加class
      $(".nav-classify").toggleClass('overflow')
    }
  });
})


/**
 * 折扣商品列表-数据渲染
 */
$.ajax({
  type:'get',
  url:'http://139.199.192.48:9090/api/getmoneyctrl',
  beforeSend:function(){
    $(".auto-loading").show();
    $(".more").hide();
  },
  success:function(data){
    $("#jxhdc-list").html(template('jxhdc-list-tpl', data.result));
    console.log(data)
  }
});



// 点击回到顶部
$("#returnTop,.returnTop").on("click", function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
});

/* 滚动至200高度的时候显示回到顶部-否则隐藏 */
window.onscroll = function () {
  var srcollTop = $(document).scrollTop();
  if (srcollTop >= 200) {
    $(".returnTop").fadeIn(300);
  } else {
    $(".returnTop").fadeOut(300);
  }
}


$(document).ajaxStart(function () {
  $(".auto-loading").show();
});
$(document).ajaxStop(function () {
  $(".auto-loading").hide();
  $(".more").show();
});