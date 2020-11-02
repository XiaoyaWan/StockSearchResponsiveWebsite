import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SmachartService} from './smachart.service';
import {Options} from 'highcharts/highstock';
import * as SMAHighcharts from 'highcharts/highstock';
declare var require: any;
const indicators = require('highcharts/indicators/indicators');
indicators(SMAHighcharts);
const vbp = require('highcharts/indicators/volume-by-price');
vbp(SMAHighcharts);
@Component({
  selector: 'app-details-smachart',
  styleUrls: ['./smachart.component.css'],
  templateUrl: './smachart.component.html'
})

export class SmachartComponent implements OnInit {
  constructor(private route: ActivatedRoute, private smachartService: SmachartService) { }

  detailsSMAChartHighcharts: typeof SMAHighcharts = SMAHighcharts;
  detailsSMAChartOptions: Options;
  detailsSMAChartList: any = [];
  query: string;
  ohlc: any = [];
  volume: any = [];

  ngOnInit(): void {
    this.query = this.route.snapshot.params.id.toUpperCase();
    this.smachartService.getDetailsSMAChartData(this.query).subscribe((data) => {
      this.detailsSMAChartList = data;
      let i = 0;
      for (i; i < this.detailsSMAChartList.length; i += 1) {
        const someDate = new Date(this.detailsSMAChartList[i].date);
        this.ohlc.push([
          // tslint:disable-next-line:max-line-length
          // Date.UTC(someDate.getFullYear(), someDate.getMonth(), someDate.getDate()),
          someDate.getTime(),
          this.detailsSMAChartList[i].open,
          this.detailsSMAChartList[i].high,
          this.detailsSMAChartList[i].low,
          this.detailsSMAChartList[i].close,
        ]);
        this.volume.push([
          // tslint:disable-next-line:max-line-length
          // Date.UTC(someDate.getFullYear(), someDate.getMonth(), someDate.getDate()),
          someDate.getTime(),
          this.detailsSMAChartList[i].volume
        ]);
      }
      console.log('ohlc:' + this.ohlc);
      console.log('volume:' + this.volume);
      this.detailsSMAChartOptions = {
        // chart: { height: (9 / 16 * 100) + '%' }, // 16:9 ratio
        title : { text : this.query + ' Historical' },
        subtitle: { text: 'With SMA and Volume by Price technical indicators' },
        yAxis: [{
            startOnTick: false,
            endOnTick: false,
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],
        tooltip: {
            split: true
        },
        series: [{
            type: 'candlestick',
            name: this.query,
            id: this.query,
            zIndex: 2,
            data: this.ohlc
        }, {
            type: 'column',
            name: 'Volume',
            id: 'volume',
            data: this.volume,
            yAxis: 1
        }, {
            type: 'vbp',
            linkedTo: this.query,
            params: {
                volumeSeriesID: 'volume'
            },
            dataLabels: {
                enabled: false
            },
            zoneLines: {
                enabled: false
            }
        }, {
            type: 'sma',
            linkedTo: this.query,
            zIndex: 1,
            marker: {
                enabled: false
            }
        }],
        rangeSelector: {
            selected: 2
        },
      };
    });
  }
}
