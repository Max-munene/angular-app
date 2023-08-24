import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  private chart: any;

  ngOnInit(): void {
    this.chart = new Chart(
      document.getElementById('graph') as HTMLCanvasElement,
      {
        type: 'line',
        data: {
          labels: [
            '2000',
            '2001',
            '2002',
            '2003',
            '2004',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
          ],
          datasets: [
            {
              label: 'My test Data Graph',
              data: [
                '10',
                '20',
                '35',
                '40',
                '56',
                '10',
                '25',
                '36',
                '46',
                '100',
              ],
              backgroundColor: ['#fff'],
              borderColor: ['#3f51b5'],
              // tension: 0.35,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: true,
            },
            y: {
              display: true,
              beginAtZero: true,
            },
          },
        },
      }
    );
  }
}

// totalData() {
//   return this.setUpChart(this.yearList, this.data);
// }
// private setUpChart(yearList: string[], data: string[])
