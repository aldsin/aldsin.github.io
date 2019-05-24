import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { CategoryComponent } from './home/categories/category/category.component';
import { FeaturedAlgoComponent } from './home/featured-algo/featured-algo.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CategoriesComponent, CategoryComponent, FeaturedAlgoComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AppMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
