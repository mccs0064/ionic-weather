import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { Weather } from '../models/weather';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public weather: Weather = null;
  public searchText: string = null;

  constructor(private geolocation: Geolocation, private weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition()
      .then(resp => this.getWeather(resp.coords.latitude, resp.coords.longitude))
      .catch(error => console.log('Error getting location', error));
  }

  ionViewWillEnter() {
    this.searchText = null;
  }

  getWeather(lat: number, lng: number) {
    this.weatherService.getWeatherFromLatLng(lat, lng).subscribe(
      {
        next: (weather: Weather) => this.weather = weather
      }
    );
  }

  onSubmit(cityName: string) {
    this.router.navigate(['forecast', cityName]);
  }

}
