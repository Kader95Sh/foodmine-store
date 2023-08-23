import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compnents/partials/header/header.component';
import { HomeComponent } from './compnents/pages/home/home.component';
import { SerchComponent } from './compnents/partials/serch/serch.component';
import { FoodPageComponent } from './compnents/pages/food-page/food-page.component';
import { TagsComponent } from './compnents/partials/tags/tags.component';
import { CartPageComponent } from './compnents/pages/cart-page/cart-page.component';
//import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SerchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule/*,
    RatingModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
