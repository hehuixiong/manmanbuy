
var couponId = getSearch('couponid');
$.get('http://139.199.192.48:9090/api/getcouponproduct',{couponid:couponId},function(data){
  // console.log(data);
      $('#center-coupon').html(template('coupontpl',data.result));
      $('#center-coupon').on('click',function(){
      $('.bibi1').show();
      console.log($('#center-coupon'));
  });
});

// 切割数据的方法
function getSearch(key){
  var searchSrt = location.search.slice(1); //把字符串中的指定位置的字符去掉
  var searchArr = searchSrt.split('&'); //把字符串中&符号之前的字符劈开变成数组
  var searchObj = {},tempArr;
  for(var i=0; i<searchArr.length; i++){
    tempArr = searchArr[i].split("=");  //把每一组字符串中=符号之前的字符劈开变成一组组的数组
    // console.log(tempArr)
    searchObj[tempArr[0]] = tempArr[1];
    // console.log(searchObj[key])
  }
  return key? searchObj[key] : searchObj;
}

