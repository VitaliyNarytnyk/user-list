import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CardComponent } from '../shared/components/card/card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
