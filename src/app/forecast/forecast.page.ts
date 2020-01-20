import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherService } from '../weather/weather.service';
import { Weather } from '../models/weather';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  public forecast: Weather[] = null;
  public city: string = null;

  constructor(private activeRoute: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe({
      next: (params: Params) => this.getForecastFromCity(params.city)
    });
  }

  getForecastFromCity(city: string) {
    this.city = city;
    this.weatherService.getFiveDayForecastForCity(city).subscribe({
      next: (forecast: Weather[]) => this.forecast = forecast
    });
  }

}
