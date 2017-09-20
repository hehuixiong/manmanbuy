// 点击回到顶部
$("#returnTop").on("click", function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
});

$(document).ready(function () {
  var pageidnum = 1;
  render() //先渲染一次数据-默认是第一页
  function render(index) {
    $.ajax({
      type: 'get',
      data: {
        pageid: index || 1,
      },
      url: 'http://139.199.192.48:9090/api/getmoneyctrl',
      /* 异步请求 */
      async: true,
      beforeSend:function(){
        $(".auto-loading").show();
      },
      success: function (data) {
        console.log(data)
        /* 渲染商品 */
        $('#save-money').html(template('save-money-tpl', data.result));
        /*计算一共要有多少个页码 */
        var totalpage = Math.ceil(data.totalCount / data.pagesize)
        /* 拼接字符串 */
        var str = '';
        str += '<option value="1" selected > 1 /' + totalpage + '</option>'
        for (var i = 2; i <= totalpage; i++) {
          if (i == pageidnum) {
            str += '<option value="' + (i) + '"' + 'selected' + ' >' + (i) + '/' + totalpage + '</option>'
            continue
          }
          str += '<option value="' + (i) + '" >' + (i) + '/' + totalpage + '</option>'
        }
        $('#select-btn').html(str);
      }
    })
  }

  /* 点击选项卡切换页数 */
  $('#select-btn').change(function () {
    pageidnum = $('#select-btn option:selected').val();
    render(pageidnum);
  })


  //点击下一页
  $('#gonext').on('click', function () {
    pageidnum++;
    var lenght = $('#select-btn option').length;
    if (pageidnum > lenght) {
      alert('已经是最后一页了');
      return;
    }
    render(pageidnum);
  })
  //点击上一页
  $('#goprevious').on('click', function () {
    pageidnum--;
    if (pageidnum < 1) {
      pageidnum = 1
      alert('已经是第一页了');
      return;
    }
    render(pageidnum);
  })
})


$.get("http://139.199.192.48:9090/api/getmoneyctrlproduct",{
  productid :20
},function(data){
  console.log(data)
});



$(document).ajaxStart(function () {
    $(".auto-loading").show();
    $(".loadMore").hide();
});
$(document).ajaxStop(function () {
    $(".auto-loading").hide();
    $(".loadMore").show();
});