$(document).ready(function(){


$("#left").click(function(){
  var value=$("#text").val();
  $("#addLeft").append("<li>"+value+"</li>")
  
})
$("#right").click(function(){
  var value=$("#text").val();
  $("#addRight").append("<li>"+value+"</li>")
  alert(value)


})
})