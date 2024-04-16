import { LocationsComponent } from './components/locations/locations.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'locations', component:LocationsComponent}
];
