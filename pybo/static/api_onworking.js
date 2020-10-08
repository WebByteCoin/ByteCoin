function loading() {
    // 빗썸의 7개 코인 시세(json데이터는{status, data{}}의 형태이므로 data.data.object구조로 호출)
    $.getJSON('https://api.bithumb.com/public/ticker/BTC_KRW', function(data) {
        var text = `${data.data.closing_price} (종가)<br>
                    ${data.data.max_price} / ${data.data.min_price}`
        $(".bth_pbtc").html(text);
    });
    $.getJSON('https://api.bithumb.com/public/ticker/ETH_KRW', function(data) {
        var text = `${data.data.closing_price} (종가)<br>
                    ${data.data.max_price} / ${data.data.min_price}`
        $(".bth_peth").html(text);
    });
    $.getJSON('https://api.bithumb.com/public/ticker/LTC_KRW', function(data) {
        var text = `${data.data.closing_price} (종가)<br>
                    ${data.data.max_price} / ${data.data.min_price}`
        $(".bth_pltc").html(text);
    });
    $.getJSON('https://api.bithumb.com/public/ticker/LINK_KRW', function(data) {
        var text = `${data.data.closing_price} (종가)<br>
                    ${data.data.max_price} / ${data.data.min_price}`
        $(".bth_plink").html(text);
    });
    $.getJSON('https://api.bithumb.com/public/ticker/DOT_KRW', function(data) {
        var text = `${data.data.closing_price} (종가)<br>
                    ${data.data.max_price} / ${data.data.min_price}`
        $(".bth_pdot").html(text);
    });
    $.getJSON('https://api.bithumb.com/public/ticker/EOS_KRW', function(data) {
        var text = `${data.data.closing_price} (종가)<br>
                    ${data.data.max_price} / ${data.data.min_price}`
        $(".bth_peos").html(text);
    });
    $.getJSON('https://api.bithumb.com/public/ticker/XRP_KRW', function(data) {
        var text = `${data.data.closing_price} (종가)<br>
                    ${data.data.max_price} / ${data.data.min_price}`
        $(".bth_pxrp").html(text);
    });

    // 코빗 6개 코인 시세 _ 작업중! (코인원, 고팍스, 코빗은 CORS Policy가 걸려있어서 단순 코드 X)
    $.getJSON('https://api.korbit.co.kr/v1/ticker/detailed/all', function(data) {
        var text = `${data.btc_krw} (종가)<br>
                    ${data.btc_krw.high} / ${data.btc_krw.low}`
        $(".cbt_pbtc").html(text);
    });

    // 업비트의 7개 코인 시세(주의: JSON Array 안에 들어있으므로 data호출 시, 인덱스번호 필요!)
    $.getJSON('https://api.upbit.com/v1/ticker?markets=KRW-BTC', function(data) {
        var text = `${data[0].trade_price} (종가)<br>
                    ${data[0].high_price} / ${data[0].low_price}`
        $(".ubt_pbtc").html(text);
    });
    $.getJSON('https://api.upbit.com/v1/ticker?markets=KRW-ETH', function(data) {
        var text = `${data[0].trade_price} (종가)<br>
                    ${data[0].high_price} / ${data[0].low_price}`
        $(".ubt_peth").html(text);
    });
    $.getJSON('https://api.upbit.com/v1/ticker?markets=KRW-LTC', function(data) {
        var text = `${data[0].trade_price} (종가)<br>
                    ${data[0].high_price} / ${data[0].low_price}`
        $(".ubt_pltc").html(text);
    });
    $.getJSON('https://api.upbit.com/v1/ticker?markets=KRW-LINK', function(data) {
        var text = `${data[0].trade_price} (종가)<br>
                    ${data[0].high_price} / ${data[0].low_price}`
        $(".ubt_plink").html(text);
    });
    $.getJSON('https://api.upbit.com/v1/ticker?markets=KRW-DOT', function(data) {
        var text = `${data[0].trade_price} (종가)<br>
                    ${data[0].high_price} / ${data[0].low_price}`
        $(".ubt_pdot").html(text);
    });
    $.getJSON('https://api.upbit.com/v1/ticker?markets=KRW-EOS', function(data) {
        var text = `${data[0].trade_price} (종가)<br>
                    ${data[0].high_price} / ${data[0].low_price}`
        $(".ubt_peos").html(text);
    });
    $.getJSON('https://api.upbit.com/v1/ticker?markets=KRW-XRP', function(data) {
        var text = `${data[0].trade_price} (종가)<br>
                    ${data[0].high_price} / ${data[0].low_price}`
        $(".ubt_pxrp").html(text);
    });

    // 페이지 새로 고침
    setTimeout('location.reload()',30000); //30초마다 페이지 새로고침, 10000은 10초임.
}

//함수 호출
loading();