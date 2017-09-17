$.get('http://139.199.192.48:9090/api/getbaicaijiatitle', function(data) {
    // console.log(data.result);
    $('#title').html(template('title_ul', data.result));
    addActive();
    // var myscroll = new iScroll("#title", {
    //     scrollX: true,
    //     scrollY: false,
    //     hScrollbar: false,
    //     vScrollbar: false,
    //     vScroll: false
    // });
    var menu_ul = document.querySelector('.menu_ul');
    itcastEvent(menu_ul).tap(function(e) {
        // 获取获取当前点击的li标签对象
        var li = e.target.parentNode;
        var lis = $('#title').children();
        // li标签的索引
        var index = 0;
        for (var i = 0; i < lis.length; i++) {
            var element = lis[i];
            if (element === li) {
                index = i;
                $.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: index }, function(data) {
                    $('#list_ul').html(template('bcj_product_list', data.result));
                });
            }
        }
    });

    // $.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: '0' }, function(data) {
    //     $('#list_ul').html(template('bcj_product_list', data.result));
    // });
});

$.get('http://139.199.192.48:9090/api/getbaicaijiaproduct', { titleid: '0' }, function(data) {
    console.log(data.result);
    $('#list_ul').html(template('bcj_product_list', data.result));
});

function receiveData() {
    var lis = $('#title').children();
}


function addActive() {
    var lis = $('#title').children();
    lis.eq(0).addClass('active');
}