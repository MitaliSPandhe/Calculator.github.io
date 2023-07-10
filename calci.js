function input(num){
  $(".display").val($(".display").val() + num);    //current value + num
}

function Ac(){
    $(".display").val("");
}

function eql(){
    $(".display").val(eval( $(".display").val()));
}
function del(){
  let value = $(".display").val();
  $(".display").val(value.substring(0,value.length-1))
}


