import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import * as numeral from 'numeral'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  // Using Leaflet to display my Map

  // this are inputs sent from statistic component(parent) with a values 
  @Input() latitude: any;
  @Input() longitude: any;
  @Input() Country: any;
  @Input() Countries: any;
  @Input() ResetMap: any
  @Input() Type = "cases"
  popupCases: any;
  popupDeaths: any;
  popupRecovered: any
  markerIcon: any
 
  // this functions tracks changes of the input decorator
  ngOnChanges() {
    this.mapCoordinates();

  }

 
  private map: any = L.Map;

  private initMap(): void {
    // this is initialisation of a map
    this.map = L.map('map', { closePopupOnClick: false }).setView([-29, 24], 4);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    }
    );

    // adding tile layer to map
    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
   this.initMap()

  }

  // This functions tracks changes and performs some functions on value change
  mapCoordinates() {
    // This function is mapping through all countries and getting cases of all countries and creating circles on the map based on the cases
    // It multiplies the cases with a random number of and gets the squareroot of the number then applies the number as the radius f the circle
    // So higher cases will have a higher circle 


   
    this.Countries.map((country:any)=>{
      if(country.country == this.Country){
        this.markerIcon=JSON.stringify(country.countryInfo.flag)
       this.popupCases = numeral(country.cases).format('0.0a')
       this.popupDeaths= numeral(country.deaths).format('0.0a')
       this.popupRecovered=numeral(country.recovered).format('0.0a')

      }})
      // adding cases on the map using circle layer
   this.Countries.map((country:any)=>(
  
    L.circle([country.countryInfo.lat, country.countryInfo.long],{
              color: this.Type==="cases"?"blue":this.Type==="recovered"?"#7dd71d":this.Type==="deaths"?"red":"",
              fillColor: this.Type==="cases"?"blue":this.Type==="recovered"?"#7dd71d":this.Type==="deaths"?"red":"",
              fillOpacity: 0.2,
              radius: Math.sqrt(country[this.Type]) * 200,
    }).addTo(this.map)
   ))
  
    //  This shows a popup to a location of the selected country
    if (this.Country) {
      this.map.flyTo([this.latitude, this.longitude]);
      var countryIcon = '<img src=' + this.markerIcon + ' style="height:60px;width:100px"/>'
      L.popup({ closeButton: false, className: 'popup' })
        .setLatLng([this.latitude, this.longitude])
        .setContent(
          countryIcon + '</br>' +
          '<b> ' + this.Country.toUpperCase() + '</b>' + '</br>' +
          '<b> cases:</b>' + this.popupCases + '</br>' +
          '<b> deaths:</b>' + this.popupDeaths + '</br>' +
          '<b> recovered:</b>' + this.popupRecovered + '</br>')
        .openOn(this.map);
    }
    if (this.ResetMap == false) {
      this.map.flyTo([34.80746, -40.4796])
    }

  }
}
