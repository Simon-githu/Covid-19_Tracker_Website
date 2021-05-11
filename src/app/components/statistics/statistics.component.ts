import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})

export class StatisticsComponent implements OnInit {
  lat: any = 0;
  long: any = 0;
  selectedCountry: any
  worldWide = new FormControl("WorldWide")
  World: any = [];
  showData: boolean = false;
  coordinates: any = [];
  Countries: any = [];
  DropDownCountries: any = []
  Country: any = {};
  sortedData: any = [];
  array: any = [];
  WorldWide: string = "WorldWide"
  Type: any;
  constructor(private data: DataService) { }
  CaseType(caseType: string) {
    this.Type = caseType
  }
  ngOnInit(): void {
    // retrieving covid-19 data of all countries
    this.data.getCountries().subscribe((res) => {

      // Getting countries and inserting them into an array to display in the dropdown select
      res.map((value: any) => { this.DropDownCountries.push({ name: value.country, value: value.countryInfo.iso2 }) })

      // Sorting the data in an array to return countries with higher cases at the top
      this.Countries = res.sort((a: { cases: number }, b: { cases: number }) => a.cases > b.cases ? -1 : 1);

    });

    // getting all covid-19 live updates around the world and asssigning the data to the world array
    this.data.getWorldWide().subscribe((res) => {
      this.World = res
    })

    // This form control recieves a country value on click and change and uses the country value to get covid-19 data updates of the country 
    this.worldWide.valueChanges.subscribe((country) => {

      if (this.worldWide.value === this.WorldWide) {
        this.showData = false
      } else {
        this.data.getCountry(country).subscribe((res) => {
          this.Country = res;
          this.showData = true
          this.lat = res.countryInfo.lat;
          this.long = res.countryInfo.long;
          this.selectedCountry = res.country
        });
      }
    })
  }
}




