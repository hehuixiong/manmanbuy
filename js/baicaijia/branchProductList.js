// 切割数据的方法
function getSearch(key) {
    var searchSrt = location.search.slice(1); //把字符串中的指定位置的字符去掉
    var searchArr = searchSrt.split('&'); //把字符串中&符号之前的字符劈开变成数组
    var searchObj = {},
        tempArr;
    for (var i = 0; i < searchArr.length; i++) {
        tempArr = searchArr[i].split("="); //把每一组字符串中=符号之前的字符劈开变成一组组的数组
        // console.log(tempArr)
        searchObj[tempArr[0]] = tempArr[1];
        // console.log(searchObj[key])
    }
    return key ? searchObj[key] : searchObj;
}


// var color = ['#f10e0e', '#ff9314', '#8adf5b'];
var brandTitleId = getSearch('brandTitleId');
$.get('http://139.199.192.48:9090/api/getbrand', { brandtitleid: brandTitleId }, function(data) {
    // console.log(data);
    $('#branch_ul').html(template('nav_branchProductList', data.result));
    $('#branch_ul').children().eq(0).find('i').css('backgroundColor', '#f10e0e');
    $('#branch_ul').children().eq(1).find('i').css('backgroundColor', '#ff9314');
    $('#branch_ul').children().eq(2).find('i').css('backgroundColor', '#8adf5b');
    $('.navTitleInfo').html(localStorage.getItem('navTitleInfo'));
});

$.get('http://139.199.192.48:9090/api/getbrandproductlist', { brandtitleid: brandTitleId }, function(data) {
    // console.log(data);
    $('#nav_productInfo_ul').html(template('nav_productInfo', data.result));
});


dataRequire();

function dataRequire() {
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getproductcom',
        data: {
            productid: Math.floor(Math.random() * 800),
        },
        success: function(data) {
            if (data.result == '') {
                dataRequire();
            } else {
                $('#nav_productCom_ul').append(template('nav_productCom', data.result));
                $('#nav_newproductCom_ul').append(template('nav_productCom', data.result));
            }
        }
    });
}

// function loadData() {
//     for (var i = 0; i < comments.length; i++) {
//         $('#nav_productCom_ul').append(comments[i]);
//     }
// }

setTimeout(function() {
    // loadData();
    var comLis = $('#nav_productCom_ul').children();
    var newcomLis = $('#nav_newproductCom_ul').children();
    console.log(comLis);
    var infoLis = $('#nav_productInfo_ul').children();
    for (var i = 0; i < comLis.length; i++) {
        var src = infoLis.eq(i).find('img').attr('src');
        comLis.eq(i).find('img').attr('src', src);
        newcomLis.eq(i).find('img').attr('src', src);
        var comment = infoLis.eq(i).find('p').html();
        comLis.eq(i).find('.tit').html(comment);
        newcomLis.eq(i).find('.tit').html(comment);
    }
}, 1500);

console.log(localStorage.getItem('navTitleInfo'));

// var comLis = $('#nav_productCom_ul').children();