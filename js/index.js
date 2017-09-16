/**
 * 导航分类-数据渲染
 */
$.get("http://139.199.192.48:9090/api/getindexmenu",function(data){
  $("#nav-classify-row").html(template("nav-classify-tpl",data.result));
})



/**
 * 折扣商品列表-数据渲染
 */

$.get('http://139.199.192.48:9090/api/getmoneyctrl',function(data){
$("#jxhdc-list").html(template('jxhdc-list-tpl',data.result));
console.log(data)
})