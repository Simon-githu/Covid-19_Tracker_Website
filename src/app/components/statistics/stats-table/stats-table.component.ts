import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {
//this is an input function/decorator and it recieves covid-19 countries data object(CountriesData) of countries sent from statistic component(parent)
  @Input() CountriesData:any
  constructor() { }

  ngOnInit(): void {
  }

}
