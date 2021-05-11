import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as numeral from 'numeral'
@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  countryCode:string=""
  Deaths:any=0
  Cases:any=0
  Recovered:any=0
 TodayDeaths:any=0
 TodayRecovered:any=0
 TodayCases:any=0
  constructor(private data:DataService) { }

  ngOnInit(): void {
    // getting live covid-19 updates of a country
    this.data.getGeolocation().subscribe((res:any)=>{
      this.data.getCountry(res.country_name).subscribe((dataRes:any)=>{
          this.countryCode=dataRes.countryInfo.iso2
          this.Cases= numeral(dataRes.cases).format('0.0a')
          this.Deaths=numeral(dataRes.deaths).format('0.0a')
          this.Recovered=numeral(dataRes.recovered).format('0.0a')
          this.TodayCases=numeral(dataRes.todayCases).format('0.0a')
          this.TodayDeaths=numeral(dataRes.todayDeaths).format('0.0a')
          this.TodayRecovered=numeral(dataRes.todayRecovered).format('0.0a')
      })
    })
   
  }
}
