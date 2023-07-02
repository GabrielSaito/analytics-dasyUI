import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import {Chart} from 'chart.js';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  { 
  
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true 
  };
  public barChartLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 10, 5, 15], label: 'Vendas',  backgroundColor: '  rgb(135, 68, 225)'  },
    { data: [28, 48, 40, 19, 86, 27, 90, 70, 60, 50, 45, 55], label: 'Lucro', backgroundColor: 'rgb(254, 113, 142)' },
    
  ];
  
  
 
  public pieChartOptions = {
    responsive: true
  };
  public pieChartLabels = ['Red', 'Blue', 'Yellow'];
  public pieChartData = [300, 200, 100];
  public pieChartLegend = true;
  public pieChartType = 'pie';

  
  
title = 'analytics';
  ngOnInit(): void {

  }

  
  
  }
