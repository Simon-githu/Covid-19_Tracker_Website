import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as numeral from 'numeral'
@Component({
  selector: 'app-stats-box',
  templateUrl: './stats-box.component.html',
  styleUrls: ['./stats-box.component.css'],
})
export class StatsBoxComponent implements OnInit {
  

  Type: any;
  CountryTodayCases: any;
  CountryTodayDeaths: any;
  CountryTodayRecovered: any;
  CountryCases: any;
  CountryDeaths: any;
  CountryRecovered: any;
  WorldTodayCases: any;
  WorldTodayDeaths: any
  WorldTodayRecovered: any
  WorldCases: any;
  WorldDeaths: any
  WorldRecovered: any
  casesActive:boolean=false
  deathsActive:boolean=false
  recoveredActive:boolean=false
  @Input() CountryData: any;
  @Input() WorldData: any;
  @Input() show: any;
  @Output() CaseType = new EventEmitter();

  ngOnChanges() {
    this.data()
  }
  constructor() { }

  ngOnInit(): void {
    

  }
  data() {
    this.CountryTodayCases = numeral(this.CountryData.todayCases).format('0.0a')
    this.CountryTodayDeaths = numeral(this.CountryData.todayDeaths).format('0.0a')
    this.CountryTodayRecovered = numeral(this.CountryData.todayRecovered).format('0.0a')
    this.CountryCases = numeral(this.CountryData.cases).format('0.0a')
    this.CountryDeaths = numeral(this.CountryData.deaths).format('0.0a')
    this.CountryRecovered = numeral(this.CountryData.recovered).format('0.0a')
    this.WorldTodayCases = numeral(this.WorldData.todayCases).format('0.0a')
    this.WorldTodayDeaths = numeral(this.WorldData.todayDeaths).format('0.0a')
    this.WorldTodayRecovered = numeral(this.WorldData.todayRecovered).format('0.0a')
    this.WorldCases = numeral(this.WorldData.cases).format('0.0a')
    this.WorldDeaths = numeral(this.WorldData.deaths).format('0.0a')
    this.WorldRecovered = numeral(this.WorldData.recovered).format('0.0a')
  }
  getCases() {
    this.Type = "cases"
    this.CaseType.emit(this.Type)
 this.casesActive=true
 this.deathsActive=false
 this.recoveredActive=false
  }
  getDeaths() {
    this.Type = "deaths"
    this.CaseType.emit(this.Type)

 this.deathsActive=true
 this.recoveredActive=false
 this.casesActive=false
  }
  getRecovered() {
    this.Type = "recovered"
    this.CaseType.emit(this.Type)
    this.casesActive=false
    this.deathsActive=false
    this.recoveredActive=true
  }
}

