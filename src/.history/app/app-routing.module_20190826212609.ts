import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/firstCompnent', pathMatch: 'full' },
      { path: 'productComponent', component: ProductsComponent },
      { path: 'serviceComponent', component: ServicesComponent },
      { path: 'contactComponent', component: ContactComponent }
    ])
  ],
  exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
