$.get('http://139.199.192.48:9090/api/getmoneyctrl', {
  pageid: 1
}, function (data) {
  $("#save-money-meun").html(template("save-money-tpl", {
    'result': data.result,
    'totalPage':Math.ceil(data.totalCount / data.pagesize)
  }));
  console.log(data)
  $("#btn-page").on("click", "a", function () {
    var page = 
    $.ajax({
      type: 'get',
      url: 'http://139.199.192.48:9090/api/getmoneyctrl',
      data: {
        pageid: page,
      },
      success: function (data) {
        $("#save-money-meun").html(template("save-money-tpl", {
          'pagesize': data.pagesize,
          'totalCount': data.totalCount,
          'result': data.result
        }));
      }
    });
  });
})





























// 点击回到顶部
$("#returnTop").on("click", function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
});