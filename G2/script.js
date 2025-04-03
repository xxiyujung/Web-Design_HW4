// Data retrieved from https://netmarketshare.com/
// Make monochrome colors

const baseColor = '#a7bcc7'; 

const colors = Highcharts.getOptions().colors.map((c, i) =>
    Highcharts.color(baseColor)
        .brighten((i - 3) / 6) 
        .get()
);

// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '臺中市各種天氣型態的出現比率概估'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors,
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: '台中市主要天氣型態',
        data: [
            { name: '晴朗或多雲', y: 58.0 },
            { name: '降雨', y: 20 },
            { name: '陰天', y: 22 },
        ]
    }]
});