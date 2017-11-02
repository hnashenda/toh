import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataEmailsSubscriptionChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionsEmailsSubscriptionChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var emailsSubscriptionChart = new Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(emailsSubscriptionChart);
	
	/* ----------==========     Chart Points    ==========---------- */  
	 
	var times = function(n) {
	  return Array.apply(null, new Array(n));
	};

	var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
	  data.labels.push(index + 1);
	  data.series.forEach(function(series) {
		series.push(Math.random() * 100)
	  });

	  return data;
	}, {
	  labels: [],
	  series: times(4).map(function() { return new Array() })
	});

	var options = {
	  showLine: false,
	  axisX: {
		labelInterpolationFnc: function(value, index) {
		  return index % 13 === 0 ? 'W' + value : null;
		}
	  }
	};



	new Chartist.Line('#chart_points', data, options, responsiveOptions);

	 /* ----------==========     Chart Pie   ==========---------- */  
	 var data_pie = {
  labels: ['Bananas', 'Apples', 'Grapes'],
  series: [20, 15, 40]
};

var options_pie = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};



new Chartist.Pie('#chart_pie', data_pie, options_pie, responsiveOptions);
	
	
	 
	/* ----------==========     Chart 10    ==========---------- */  
	  
	 var chart = new Chartist.Line('#chart10', {
	  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	  series: [
		[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
		[4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
		[5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
		[3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
	  ]
	}, {
	  low: 0
	});

	// Let's put a sequence number aside so we can use it in the event callbacks
	var seq = 0,
	  delays = 80,
	  durations = 500;

	// Once the chart is fully created we reset the sequence
	chart.on('created', function() {
	  seq = 0;
	});

	// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
	chart.on('draw', function(data) {
	  seq++;

	  if(data.type === 'line') {
		// If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
		data.element.animate({
		  opacity: {
			// The delay when we like to start the animation
			begin: seq * delays + 1000,
			// Duration of the animation
			dur: durations,
			// The value where the animation should start
			from: 0,
			// The value where it should end
			to: 1
		  }
		});
	  } else if(data.type === 'label' && data.axis === 'x') {
		data.element.animate({
		  y: {
			begin: seq * delays,
			dur: durations,
			from: data.y + 100,
			to: data.y,
			// We can specify an easing function from Chartist.Svg.Easing
			easing: 'easeOutQuart'
		  }
		});
	  } else if(data.type === 'label' && data.axis === 'y') {
		data.element.animate({
		  x: {
			begin: seq * delays,
			dur: durations,
			to: data.x,
			from: data.x - 100,
			easing: 'easeOutQuart'
		  }
		});
	  } else if(data.type === 'point') {
		data.element.animate({
		  x1: {
			begin: seq * delays,
			dur: durations,
			from: data.x - 10,
			to: data.x,
			easing: 'easeOutQuart'
		  },
		  x2: {
			begin: seq * delays,
			dur: durations,
			from: data.x - 10,
			to: data.x,
			easing: 'easeOutQuart'
		  },
		  opacity: {
			begin: seq * delays,
			dur: durations,
			from: 0,
			to: 1,
			easing: 'easeOutQuart'
		  }
		});
	  } else if(data.type === 'grid') {
		// Using data.axis we get x or y which we can use to construct our animation definition objects
		var pos1Animation = {
		  begin: seq * delays,
		  dur: durations,
		  from: data[data.axis.units.pos + '1'] - 30,
		  to: data[data.axis.units.pos + '1'],
		  easing: 'easeOutQuart'
		};

		var pos2Animation = {
		  begin: seq * delays,
		  dur: durations,
		  from: data[data.axis.units.pos + '2'] - 100,
		  to: data[data.axis.units.pos + '2'],
		  easing: 'easeOutQuart'
		};

		var animations = {};
		animations[data.axis.units.pos + '1'] = pos1Animation;
		animations[data.axis.units.pos + '2'] = pos2Animation;
		animations['opacity'] = {
		  begin: seq * delays,
		  dur: durations,
		  from: 0,
		  to: 1,
		  easing: 'easeOutQuart'
		};

		data.element.animate(animations);
	  }
	});
	 
		  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  
  
  
  
  
  } //end ngoninit

}
