function fun_get() {
    var a = $("#num1").val();
    var b = $("#num2").val();
    $.get("/ajax/get/", { 'a': a, 'b': b }, function(ret){
        $('#result_get').html(ret);
    });
}

function sleep(time){
 return new Promise(function(resolve){
 setTimeout(resolve, time);
 });
}