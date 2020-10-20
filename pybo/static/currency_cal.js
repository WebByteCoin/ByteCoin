function loading() {
    $.getJSON('https://api.manana.kr/exchange/rate/KRW/USD.json', function(data) {
        var text = `${data[0].rate}`
        result = "(1$ = "+text+" KRW)"
        $(".curr").html(result);
        $(".curr2").html(text);
    });
    }

    loading();
    var cal_result = 0;

    function formating_us(vars){
    vars = Number(vars);
    vars = vars.toFixed(2);
    vars = Number(vars);
    vars = vars.toLocaleString();
    vars = String(vars);
    return vars;
    }

    function cal() {
        var currency = Number(document.getElementById("cur_hidden").textContent);
        var krw = document.getElementById("krw").value;
        cal_result = currency * krw; //krw형 자동 변형
        cal_result = formating_us(cal_result);
        document.getElementById("result_pannel1").textContent = formating_us(krw);
        document.getElementById("result_pannel2").textContent = cal_result;
        console.log(cal_result);
    };