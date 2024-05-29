import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuadradoPageRoutingModule } from './quadrado-routing.module';

import { QuadradoPage } from './quadrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuadradoPageRoutingModule
  ],
  declarations: [QuadradoPage]
})
export class QuadradoPageModule {}
