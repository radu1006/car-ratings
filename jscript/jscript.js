$(function(){
  
    $("#make-dropdown a").click(function(){
      
       $("#make").text($(this).text());
       $("#make").val($(this).text());
    });
    $("#model-dropdown a").click(function(){
        $("#model").text($(this).text());
        $("#model").val($(this).text());
    });
    $("#year-dropdown a").click(function(){
        $("#year").text($(this).text());
        $("#year").val($(this).text());
    });
  });