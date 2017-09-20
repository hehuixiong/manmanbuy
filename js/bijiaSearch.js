
$.ajax({
    url:"http://139.199.192.48:9090/api/getcategorytitle",
    type:"get",
    success:function(data){       
        $('#aspnetForm').html(template('getcategorytitle',data.result));
        $('#aspnetForm a').on('click',function(){
        $(this).toggleClass('up');
        var titleId = $(this).attr('data-index');
        // console.log(titleId);       
        var self = $(this)
        $.get('http://139.199.192.48:9090/api/getcategory',{titleid:titleId},function(data){
                // console.log(data);
                self.parent().parent().find(".fl_all").html(template('getcategory',data.result)).slideToggle();
            });
        });
    }
})


