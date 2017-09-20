$.get('http://139.199.192.48:9090/api/getmoneyctrl',function(data){
    console.log(data);
     $('#htChange-code').html(template('htChange-tpl',data.result));
});
// var categoryId = getSearch('categoryid');
// // var pageId = getSearch('pageid');

// // console.log(pageId);
// function render(categoryid,pageId){
//     $.get('http://139.199.192.48:9090/api/getproductlist',{categoryid:categoryId,pageid:pageId || 1},function(data){
//       //  console.log(data);
//        window.totalpage=Math.ceil(data.totalCount/data.pagesize);
//        window.arr = [];
//        for(var i = 0;i<window.totalpage;i++){
//           window.arr[i]= i ;
//        }
//        data.totalpage= window.totalpage;
//        data.arr=window.arr;
//        var pageid=pageId||1;
//        $('#contain_main').html(template('containtpl',data.result));
//        $('.running_small').html(template('selecttpl',data));
//        $("#selectBig option").eq((pageid-1)).attr("selected",true).siblings().attr("selected",false);
// })

// }
// render(categoryId)
// // 切割数据的方法
// function getSearch(key){
//   var searchSrt = location.search.slice(1); //把字符串中的指定位置的字符去掉
//   var searchArr = searchSrt.split('&'); //把字符串中&符号之前的字符劈开变成数组
//   var searchObj = {},tempArr;
//   for(var i=0; i<searchArr.length; i++){
//     tempArr = searchArr[i].split("=");  //把每一组字符串中=符号之前的字符劈开变成一组组的数组
//     // console.log(tempArr)
//     searchObj[tempArr[0]] = tempArr[1];
//     // console.log(searchObj[key])
//   }
//   return key? searchObj[key] : searchObj;
// }



// $(document).on("change","#selectBig",function(){
//   var pageId=$("#selectBig").val();
//   console.log(pageId);
//   render(categoryId,pageId)
// });
// $(document).on("click",".pre",function(){
//   var pageId=$("#selectBig").val();
//    pageId--;
//    if(pageId<0){
//      pageId=1;
//    }
//    render(categoryId,pageId);
// });
// $(document).on('click','.next1',function(){
//     var pageId=$("#selectBig").val();
//     pageId ++;
//     if(window.totalpage < pageId){
//       pageId = window.totalpage;
//     }
//      render(categoryId,pageId);
// });