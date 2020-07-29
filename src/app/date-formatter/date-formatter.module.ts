import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateFormatterPageRoutingModule } from './date-formatter-routing.module';

import { DateFormatterPage } from './date-formatter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateFormatterPageRoutingModule
  ],
  declarations: [DateFormatterPage]
})
export class DateFormatterPageModule {}
