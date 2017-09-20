var titleId;

$.ajax({
    url: "http://139.199.192.48:9090/api/getcategorytitle",
    type: "get",
    success: function (data) {
        $('#aspnetForm').html(template('getcategorytitle', data.result));
        $('#aspnetForm .briefin').on('click', function () {
            $(this).children().children().toggleClass('up');
            titleId = $(this).children().children().attr('data-index');
            var briefin = $(this)
            $.get('http://139.199.192.48:9090/api/getcategory', {
                titleid: titleId
            }, function (data) {
                briefin.children().eq(1).html(template('getcategory', data.result)).toggle();
            })
        })
    }
});