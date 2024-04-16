import { Injectable, NgModule } from '@angular/core';
// import { HttpBackend} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { User, Maintainer, Feature, House, Street, City } from '../regions';

@Injectable({
  providedIn: 'root',
  // imports: [HttpClientModule]
})

export class ReadDataService {

  constructor(){

  }

  getCities(cityObservable: Observable<City[]>): Observable<string[]> {
    return cityObservable.pipe(
      map(cities => cities.map(city => city.name))
    )
  }

}