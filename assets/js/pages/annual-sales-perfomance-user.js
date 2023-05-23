Highcharts.chart('annual-sales', {
    chart: {
        type: 'column',
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    title: {
        text: "My Annual Sales",
        style: {
            fontSize: '14px' 
         }
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Amount (KES)',
            text:null
        },
        gridLineColor: '#c2c2c2',
        gridLineWidth: 0.2
    },
    tooltip: {
        headerFormat: '<span style="font-size:14px">{point.key}</span><table>',
        pointFormat: '<tr><td style="black;padding:0;padding-right:5px">{series.name}:  </td> ' +
            '<td style="padding:0"><b class="fw-semibold"> KES {point.y:.,2f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        color:'#aae5d3',
        name: 'Last Year',
        data: [484559, 385668, 397873, 123414, 456770, 487893, 123590, 124596, 534524, 612352, 523493,
            123512]

    }, {
        name: 'This Year',
        color:'#00c399',
        data: [124284, 312332, 343455, 345697, 534526, 745655, 571234, 604564, 471236, 312391, 434568,
            556711]

    }]
});