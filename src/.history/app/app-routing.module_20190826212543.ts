import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products/products.component';
import { ServiceComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/firstCompnent', pathMatch: 'full' },
      { path: 'productComponent', component: ProductComponent },
      { path: 'serviceComponent', component: ServiceComponent },
      { path: 'contactComponent', component: ContactComponent }
    ])
  ],
  exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
