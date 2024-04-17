import { Component, ViewChild, ElementRef, OnInit, Injectable } from '@angular/core';
import { MatModule } from '../../modules/mat/mat.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {House, City, Feature, Maintainer, Street } from "../../regions";
import { ReadDataService } from '../../services/read-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [MatModule, HttpClientModule, NgFor, NgIf],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})

export class LocationsComponent implements OnInit{
  public cities: City[] = [];
  cityNames: string[] = [];
  streetNames: string[] = [];
  houses: House[] = [];
  
  selectedCity: string | null = null;
  selectedStreet: string | null = null;
  selectedHouse: House | null = null;

  constructor(private http:HttpClient){

  }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>('/assets/data.json');
  }

  getCityNames(){
    this.getCities().pipe(
      map(cities => cities.map(city => city.name))
    ).subscribe(data =>{
      this.cityNames = data;
    })    
  }

  getStreetsFromCity(cityName: string):Observable<Street[]>{
    return this.getCities().pipe(
      map(cities =>{
        const city = cities.find(c => c.name === cityName);
        return city ? city.streets.map(street => street) : [];
      })
    );
  }

  getStreetNamesFromCitySelected(cityName: string){
    this.selectedCity = cityName;
    
    this.getStreetsFromCity(this.selectedCity).pipe(
      map(streets => streets.map(street => street.name))
    ).subscribe(data =>{
      this.streetNames = data;
    });
  }
  
  getHousesFromStreet(cityName: string, streetName: string): Observable<House[]> {
    return this.getStreetsFromCity(cityName).pipe(
      map(streets => streets.find(street => street.name === streetName)?.houses || []),
    );
  }

  getHouseDetailsFromStreetSelected(cityName:string, streetName:string){
    this.selectedStreet = streetName;
    this.getHousesFromStreet(cityName, this.selectedStreet).subscribe(houses => this.houses = houses);    
  }

  ngOnInit():void{
    this.getCityNames();
  }

}
