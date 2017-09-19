$(function(){

  $(".btn-login>button").on("click",function(){
    var userName = $(".user-name>input").val();
    var userPassword = $(".user-password>input").val();
    if(userName=='助教你好帅' && userPassword==888888){
      alert('登录成功');
      location.href = '../manmanbuy/index.html';
    }else{
      alert("账号或密码不正确")
    }
    return false;
  });
})

/* 点击关闭app下载 */
$(".closefix").on("click",function(){
  $(".app-promotion-bar").hide(500);
});