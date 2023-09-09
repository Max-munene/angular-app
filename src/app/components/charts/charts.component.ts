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
                '250',
                '35',
                '80',
                '56',
                '5',
                '28',
                '3',
                '49',
                '110',
              ],
              backgroundColor: ['#fff'],
              borderColor: ['#DFBE7D'],
              tension: 0.35,
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
          animations: {
            tension: {
              duration: 500,
              easing: 'linear',
              from: 0.5,
              to: 0,
              loop: true,
            },
          },
        },
      }
    );

    this.chart = new Chart(
      document.getElementById('graph2') as HTMLCanvasElement,
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
                '60',
                '35',
                '40',
                '100',
                '10',
                '25',
                '36',
                '80',
                '100',
              ],
              backgroundColor: ['#fff'],
              borderColor: ['#144B73'],
              tension: 0.35,
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
          animations: {
            tension: {
              duration: 2000,
              easing: 'linear',
              from: 0.5,
              to: 0,
              loop: true,
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
