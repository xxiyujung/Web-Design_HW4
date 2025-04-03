Highcharts.chart('container', {

    colors: ['#547a8f', '#6da9d2', '#789caf','#a2bcc7', '#a7c8e7'],

    title: {
        text: '台灣各主要城市30年每月平均氣溫',
        align: 'left'
    },

    subtitle: {
        text: '資料來源:中央氣象局',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '城市'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: '資料範圍:30年平均值'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: '臺北',
        data: [16.4,16.9,18.8,22.3,25.6,28.2,29.9,29.5,27.7,24.6,21.9,18.2]
    }, 
    {
        name: '臺中',
        data: [17.0,17.7,20.1,23.5,26.4,28.1,28.9,28.4,27.8,25.5,22.6,18.7]
    },
    {
        name: '臺南',
        data: [17.9,18.9,21.6,24.9,27.4,28.8,29.3,28.9,28.5,26.3,23.4,19.6]
    }, 
    {
        name: '嘉義',
        data: [16.8,17.7,20.2,23.5,26.3,28.3,28.9,28.4,27.4,24.8,22.0,18.4]

    },
    {
        name: '臺東',
        data: [19.7,20.2,21.8,24.1,26.4,28.3,29.1,28.8,27.7,25.8,23.6,20.8]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});