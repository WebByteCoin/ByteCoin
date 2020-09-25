function loading() {
    $.getJSON('https://api.bithumb.com/public/ticker/BTC', function(data) {
        var text = `시가: ${data.data.opening_price}<br>
                    종가: ${data.data.closing_price}<br>
                    저가: ${data.data.min_price}<br>
                    고가: ${data.data.max_price}`
                    //한국어명은 https://apidocs.bithumb.com/docs/ticker 참조
        $(".mypanel").html(text);
    });
    setTimeout('location.reload()',10000); 
}


//주석1:위에 $.getJSON('https://api.bithumb.com/public/ticker/BTC', function(data) { 부분에대해..
//
//     $.getJSON('http://time.jsontest.com', function(data) { <<< 이렇게 먼저 보면 좋은데
//         (출처: http://zetcode.com/javascript/jsonurl/)
//     링크된 주소에 들어가보면.. {} 안에 "date", "time"등의 데이터가 있다! 파이썬 딕셔너리처럼..
//     그래서 function(data)로... data안에 해당 페이지 데이터를 모두 담고..
//     밑에서 Date: ${data.date} 와 같은 식으로 호출을 하는 점에 착안하여
//
//     위 https://api.bithumb.com/public/ticker/BTC 에서는
//     {}안에 status와 data가 있는데 data는 또 {}의 형태로 데이터를 가지므로..
//     위 소스에서 data.data.closing_price와 같이 지정을 해주면 올바른 값을 로드하게 된다!!
//
//     위에서 출처라고 적은 사이트(http://zetcode.com/javascript/jsonurl/)에 보면
//     제이쿼리 말고 다른 방식으로도 구현한 것을 볼 수 있다.
//     제이쿼리는 자바스크립트 언어를 확장한 또 다른 스크립트 언어인데 IE8/9에서 지원이 안 되기도 한다. . .
//
//     참고로, ` 는 키보드 ESC아래쯤에 숫자키 1앞에있는 그 키임!


//주석2:특정 div영역만 새로고치는것은 불가능한가? ㅠ_ㅠ
//
//     https://saem-ee.tistory.com/20 여기 가보면,
//     특정 영역만 새로고침 해주는 jQuery 코드가 있다. 
//     단, 함수가 호출 될 때 새로고쳐진다는 한계가 있다..
//     자동 새로고침은 페이지 전체를 새로고침(서버 부하) 또는 
//     위에 getJSON을 뜯어고쳐서 ajax의 비동기 방식으로 데이터를 가져오도록
//     참조: http://dev.epiloum.net/1395 바꾸는 방법 밖에 없어보인다... 현재로서는
//     