$.get('http://139.199.192.48:9090/api/getmoneyctrl',function(data){
  $("#save-money-list").html(template("save-money-tpl",data.result));
  console.log(data)
})