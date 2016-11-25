import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component'

import { FormsModule } from '@angular/forms'
import { ProductFilterPipe } from './products/product-filter.pipe'
import { StarComponent } from './shared/star.component'
import { ProductListComponent } from './products/product-list.component';
import { HttpModule } from '@angular/http';
import { ProductDetailComponent } from './products/product-detail.component';
@NgModule({
  imports:      [ BrowserModule, 
                FormsModule, 
                HttpModule, 
                RouterModule.forRoot([
                  { path: 'products', component: ProductListComponent },
                  { path: 'product/:id', component: ProductDetailComponent },
                  {path: 'welcome', component: WelcomeComponent },
                  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ], {useHash: true}) 
                ],
  declarations: [AppComponent,
                ProductListComponent,
                ProductFilterPipe,
                WelcomeComponent,
                StarComponent,
                ProductDetailComponent
              ],
  bootstrap:    [AppComponent]
})
export class AppModule { }
