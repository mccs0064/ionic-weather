import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [WeatherComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule
  ],
  exports: [WeatherComponent]
})
export class ComponentsModule { }
