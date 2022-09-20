import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './card-page.component';
import { CardPageRoutingModule } from './card-page-routing.module';



@NgModule({
  declarations: [CardPageComponent],
  imports: [
    CommonModule,
    CardPageRoutingModule
  ],
  exports: [CardPageComponent]
})
export class CardPageModule { }
