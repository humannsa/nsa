$(document).ready(function() {

  Morris.Line({
    element: 'line-chart',
    data: [
    { y: '2013-07-01', a: 476,  b: 376 },
    { y: '2013-07-02', a: 493,  b: 493 },
    { y: '2013-07-03', a: 465,  b: 565 },
    { y: '2013-07-04', a: 458,  b: 658 },
    { y: '2013-07-05', a: 527,  b: 727 },
    { y: '2013-07-06', a: 518,  b: 818 },
    { y: '2013-07-07', a: 487,  b: 387 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    xlabels: 'day',
    labels: ['Sleep this week', 'Sleep last week']
  });

  Morris.Bar({
    element: 'bar-chart',
    data: [
    { y: '2013-07-01', a: 8000,  b: 9000 },
    { y: '2013-07-02', a: 7500,  b: 6500 },
    { y: '2013-07-03', a: 5000,  b: 4000 },
    { y: '2013-07-04', a: 7500,  b: 6500 },
    { y: '2013-07-05', a: 5000,  b: 4000 },
    { y: '2013-07-06', a: 7500,  b: 6500 },
    { y: '2013-07-07', a: 10000, b: 9000 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Steps this Week', 'Steps last Week']
    });

});
