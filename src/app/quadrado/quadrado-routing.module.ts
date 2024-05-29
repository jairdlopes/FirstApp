import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadradoPage } from './quadrado.page';

const routes: Routes = [
  {
    path: '',
    component: QuadradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuadradoPageRoutingModule {}
