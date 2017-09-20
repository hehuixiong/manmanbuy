$.get('http://139.199.192.48:9090/api/getbrandtitle', function(data) {
    $('#branch_ul').html(template('nav_branchdata', data.result));
    // console.log(data.result);

    var menu_ul = document.querySelector('#branch_ul');
    menu_ul = menu_ul.children;
    // console.log(menu_ul);
    for (var i = 0; i < menu_ul.length; i++) {
        itcastEvent(menu_ul[i]).tap(function(e) {
            var li = e.target;
            var brantitleid = li.children[0].getAttribute('data-brandTitleId');
            // console.log(brantitleid);
            localStorage.setItem('navTitleInfo', li.children[0].innerhtml);
            location.href = './html/baicaijia/branchProductList.html?brandTitleId=' + brantitleid;
        });
    }

    $('#branch_ul').children().on('click', function() {
        var info = $(this).find('a').html();
        var info = info.substring(0, info.indexOf('十'));
        // alert(info);
        localStorage.setItem('navTitleInfo', info);
    });
});



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