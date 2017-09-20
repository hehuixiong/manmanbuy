
var index = 1;
var page;

function loadData(index) {
    if ($(".loadMore").hasClass("loading")) {
        return;
    }
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getinlanddiscount',
        type: 'get',
        beforeSend: function () {
            $(".loadMore").addClass("loading");
            $(".auto-loading").show();
            $(".loadMore").hide();
        },
        success: function (data) {
            var result = data.result;
            var arr = [];
            var col = 4;
            //开始位置
            var start = col * index - col;
            var end = col * index
            page = Math.ceil(result.length / col);
            for (var i = start; i < end; i++) {
                arr.push(result[i])
            }
            $('#data_ul').append(template('list_data', arr));
            //保存当然页面的id
            $(".loadMore").attr("dataIndex", index)
            if (index >= page) {
                $(".loadMore").text("没有更多数据了");
            }
        },
        complete: function () {
            $(".loadMore").removeClass("loading");
        }
    })
}
loadData(index);


$(".loadMore").on("click", function () {
    index = $(this).attr("dataIndex");
    index++;
    if (index > page) {
        return;
    } else {
        loadData(index);
    }
})


$(document).ajaxStart(function () {
    $(".auto-loading").show();
    $(".loadMore").hide();
});
$(document).ajaxStop(function () {
    $(".auto-loading").hide();
    $(".loadMore").show();
});


$(document).scroll(function () {
    var dataTop = $("#data_ul").offset().top;
    var dataH = $("#data_ul").height();
    var windowTop = $(window).scrollTop();
    var windowH = $(this).height();
    if (dataTop + dataH - windowTop - windowH < 100 && !$(".loadMore").hasClass('loading')) {
        console.log(123);
        var index = $(".loadMore").attr('dataIndex');
        index++;
        if (index > page) {
            return;
        } else {
            loadData(index);
        }
    }
});

// 点击回到顶部
$("#returnTop,.returnTop").on("click", function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
});