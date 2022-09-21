import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardPageComponent } from './card-page.component';
import { CardPageRoutingModule } from './card-page-routing.module';



@NgModule({
  declarations: [CardPageComponent],
  imports: [
    CommonModule,
    CardPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CardPageComponent]
})
export class CardPageModule { }
