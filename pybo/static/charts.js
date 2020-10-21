function loadndraw1(){
    $.getJSON('https://api.bithumb.com/public/transaction_history/BTC_KRW', function(data) {
    var stamp1 = `${data.data[1].transaction_date}`
    var price1 = `${data.data[1].price}`
    var stamp2 = `${data.data[2].transaction_date}`
    var price2 = `${data.data[2].price}`
    var stamp3 = `${data.data[3].transaction_date}`
    var price3 = `${data.data[3].price}`
    var stamp4 = `${data.data[4].transaction_date}`
    var price4 = `${data.data[4].price}`
    var stamp5 = `${data.data[5].transaction_date}`
    var price5 = `${data.data[5].price}`
    var stamp6 = `${data.data[6].transaction_date}`
    var price6 = `${data.data[6].price}`
    var stamp7 = `${data.data[7].transaction_date}`
    var price7 = `${data.data[7].price}`         
    //$(".test").html(result);

        // 여기부턴 차트 그리기 코드
        var ctx = document.getElementById('myChart1').getContext('2d');
        var chart = new Chart(ctx, {
        //차트 종류 선택
        type: 'line',
        //차트 데이터
        data: {
            labels: ["", "", "", "", "", "", ""],
                    //[stamp1, stamp2, stamp3, stamp4, stamp5, stamp6, stamp7],
            datasets: [{
                label: 'BTC',
                //backgroundColor: 'fillPattern',//'transparent',
                borderColor: 'lightgray',
                fill: true, //밑에 채우기
                data: [price1, price2, price3, price4, price5, price6, price7]
            }]
        },
        //옵션 https://www.chartjs.org/samples/latest/scales/gridlines-display.html 참조
        options: {
            labels: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        //drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: false,
                        stepSize: 0
                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        //drawBorder: false, // | _ 선 표시 여부 기본은 true
                        drawOnChartArea: false,
                        drawTicks: false, //| _ 선의 눈금자 표기여부
                        stepSize: 0
                    },
                    ticks: {    //왼쪽 스케일(눈금) 조절
                        display: false
                        //min: 0,
                        //max: 100,
                        //stepSize: 10
                    }
                }]
            },
            legend: {
                display: false
            },
            // title: {
            //     display: false,
            //     text: 'BTC 추이'
            // }
        }
        });
    });
}
function loadndraw2(){
    $.getJSON('https://api.bithumb.com/public/transaction_history/ETH_KRW', function(data) {
    var stamp1 = `${data.data[1].transaction_date}`
    var price1 = `${data.data[1].price}`
    var stamp2 = `${data.data[2].transaction_date}`
    var price2 = `${data.data[2].price}`
    var stamp3 = `${data.data[3].transaction_date}`
    var price3 = `${data.data[3].price}`
    var stamp4 = `${data.data[4].transaction_date}`
    var price4 = `${data.data[4].price}`
    var stamp5 = `${data.data[5].transaction_date}`
    var price5 = `${data.data[5].price}`
    var stamp6 = `${data.data[6].transaction_date}`
    var price6 = `${data.data[6].price}`
    var stamp7 = `${data.data[7].transaction_date}`
    var price7 = `${data.data[7].price}`         
    //$(".test").html(result);

        // 여기부턴 차트 그리기 코드
        var ctx = document.getElementById('myChart2').getContext('2d');
        var chart = new Chart(ctx, {
        //차트 종류 선택
        type: 'line',
        //차트 데이터
        data: {
            labels: ["", "", "", "", "", "", ""],
                    //[stamp1, stamp2, stamp3, stamp4, stamp5, stamp6, stamp7],
            datasets: [{
                label: 'ETH',
                //backgroundColor: 'fillPattern',//'transparent',
                borderColor: 'lightgray',
                fill: true, //밑에 채우기
                data: [price1, price2, price3, price4, price5, price6, price7]
            }]
        },
        //옵션 https://www.chartjs.org/samples/latest/scales/gridlines-display.html 참조
        options: {
            labels: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        //drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: false,
                        stepSize: 0
                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        //drawBorder: false, // | _ 선 표시 여부 기본은 true
                        drawOnChartArea: false,
                        drawTicks: false, //| _ 선의 눈금자 표기여부
                        stepSize: 0
                    },
                    ticks: {    //왼쪽 스케일(눈금) 조절
                        display: false
                        //min: 0,
                        //max: 100,
                        //stepSize: 10
                    }
                }]
            },
            legend: {
                display: false
            },
            // title: {
            //     display: false,
            //     text: 'BTC 추이'
            // }
        }
        });
    });
}
function loadndraw3(){
    $.getJSON('https://api.bithumb.com/public/transaction_history/LTC_KRW', function(data) {
    var stamp1 = `${data.data[1].transaction_date}`
    var price1 = `${data.data[1].price}`
    var stamp2 = `${data.data[2].transaction_date}`
    var price2 = `${data.data[2].price}`
    var stamp3 = `${data.data[3].transaction_date}`
    var price3 = `${data.data[3].price}`
    var stamp4 = `${data.data[4].transaction_date}`
    var price4 = `${data.data[4].price}`
    var stamp5 = `${data.data[5].transaction_date}`
    var price5 = `${data.data[5].price}`
    var stamp6 = `${data.data[6].transaction_date}`
    var price6 = `${data.data[6].price}`
    var stamp7 = `${data.data[7].transaction_date}`
    var price7 = `${data.data[7].price}`         
    //$(".test").html(result);

        // 여기부턴 차트 그리기 코드
        var ctx = document.getElementById('myChart3').getContext('2d');
        var chart = new Chart(ctx, {
        //차트 종류 선택
        type: 'line',
        //차트 데이터
        data: {
            labels: ["", "", "", "", "", "", ""],
                    //[stamp1, stamp2, stamp3, stamp4, stamp5, stamp6, stamp7],
            datasets: [{
                label: 'LTC',
                //backgroundColor: 'fillPattern',//'transparent',
                borderColor: 'lightgray',
                fill: true, //밑에 채우기
                data: [price1, price2, price3, price4, price5, price6, price7]
            }]
        },
        //옵션 https://www.chartjs.org/samples/latest/scales/gridlines-display.html 참조
        options: {
            labels: {
                display: false,
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                        //drawBorder: true,
                        drawOnChartArea: false,
                        drawTicks: false,
                        stepSize: 0
                    },
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                        //drawBorder: false, // | _ 선 표시 여부 기본은 true
                        drawOnChartArea: false,
                        drawTicks: false, //| _ 선의 눈금자 표기여부
                        stepSize: 0
                    },
                    ticks: {    //왼쪽 스케일(눈금) 조절
                        display: false
                        //min: 0,
                        //max: 100,
                        //stepSize: 10
                    }
                }]
            },
            legend: {
                display: false
            },
            // title: {
            //     display: false,
            //     text: 'BTC 추이'
            // }
        }
        });
    });
}
loadndraw1();
loadndraw2();
loadndraw3();