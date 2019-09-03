import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/mainComponent', pathMatch: 'full' },
      {path: 'mainComponent', component: MainComponent },
      { path: 'productComponent', component: ProductsComponent },
      { path: 'serviceComponent', component: ServicesComponent },
      { path: 'contactComponent', component: ContactComponent }
    ])
  ],
  exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
