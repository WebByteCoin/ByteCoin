$(function(){
  $('#call').click(function(){
    $('#show').html('....loading...');

    $.ajax({
        type: "GET",
        url: "https://api.coinone.co.kr/ticker/?currency=all",
        success:function(data){
            $('#show').html(JSON.stringify(data));
        }
    })
})
})