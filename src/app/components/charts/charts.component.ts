import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {
  linechart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Linechart',
    },
    credits: {
      enabled: false,
    },
    series: [{ name: 'Line 1', data: [1, 2, 4, 3] } as any],
  });
  piechart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Line 1', y: 1, color: '#34ebeb' },
          { name: 'Line 2', y: 2, color: '#2189de' },
          { name: 'Line 3', y: 3, color: '#dec221' },
          { name: 'Line 4', y: 1, color: '#a23a29' },
        ],
      } as any,
    ],
  });
}
