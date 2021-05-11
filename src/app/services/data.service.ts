import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers = new HttpHeaders({ 'Authorization': 'allow'});

  constructor(private http:HttpClient) { }
  // this function will be used get all covid-19 updates of different countries
  // It returns all covid-19 data of  all countries
  getCountries():Observable<any>{
    const url = "https://disease.sh/v3/covid-19/countries"
    return this.http.get<any>(url)
  }

  // This function will be used to get covid-19 updates of a single country
  // It returns covid-19 data of a single country
  getCountry(country: any):Observable<any>{
    const url ="https://disease.sh/v3/covid-19/countries/" + country
    return this.http.get<any>(url)
  }

  // This function will be used to get calculated covid-19 data for all cuntries
  // It returns calculated data of all cases,deaths,recoveries around the world and their totals 
  getWorldWide():Observable<any>{
    const url = "https://disease.sh/v3/covid-19/all"
    return this.http.get<any>(url)
  }

  getHistorical():Observable<any>{
    const url ="https://disease.sh/v3/covid-19/historical/all?lastdays=120"
    return this.http.get<any>(url)
  }
  
  // This function will be used to retrieves SAHI questions
  // It returns the questions from SAHI backend
  getQuestions():Observable<any>{
    const url="https://dev.api.t-res.co.za/sahiv2/questions"
    return this.http.get<any>(url,{headers:this.headers})
  }

   // This function will be used to retrieves get user country
  // It returns the callback
  getGeolocation():Observable<any>{
    const url = "https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1";
    return this.http.get<any>(url)
  }
}
