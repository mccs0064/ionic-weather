import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Weather } from '../models/weather';
import { pipe, Observable } from 'rxjs';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '43ad955f407583d979e8d5924b70fb98';
const APPID = `?APPID=${API_KEY}`;
const METRIC = '&units=metric';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForCity(cityName: string): Observable<Weather> {
    const url = `${API_BASE_URL}/weather${APPID}&q=${cityName}${METRIC}`;

    return this.http.get(url).pipe(
      map((data: any) =>
        new Weather(data.main.temp, data.weather[0].main, data.weather[0].description, data.weather[0].icon, new Date(data.dt * 1000)))
    );
  }

  getWeatherFromLatLng(lat: number, lng: number): Observable<Weather> {
    const url = `${API_BASE_URL}/weather${APPID}&lat=${lat}&lon=${lng}${METRIC}`;

    return this.http.get(url).pipe(
      map((data: any) =>
        new Weather(data.main.temp, data.weather[0].main, data.weather[0].description, data.weather[0].icon, new Date(data.dt * 1000)))
    );
  }

  getFiveDayForecastForCity(cityName: string): Observable<Weather[]> {
    const url = `${API_BASE_URL}/forecast${APPID}&q=${cityName}${METRIC}`;

    return this.http.get(url).pipe(
      map(
        (data: any) => {
          return data.list
            .filter((weather: any) => weather.dt_txt.includes('12:00:00'))
            .map((weatherItem: any) => new Weather(
              weatherItem.main.temp,
              weatherItem.weather[0].main,
              weatherItem.weather[0].description,
              weatherItem.weather[0].icon,
              new Date(weatherItem.dt * 1000)
            )
            );
        }
      )
    );

  }

}

