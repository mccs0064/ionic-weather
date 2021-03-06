import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForecastPageRoutingModule } from './forecast-routing.module';

import { ForecastPage } from './forecast.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForecastPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ForecastPage]
})
export class ForecastPageModule {}
