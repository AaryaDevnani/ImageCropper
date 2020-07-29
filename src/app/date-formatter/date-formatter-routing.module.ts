import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateFormatterPage } from './date-formatter.page';

const routes: Routes = [
  {
    path: '',
    component: DateFormatterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateFormatterPageRoutingModule {}
