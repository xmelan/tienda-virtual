import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDetailComponent } from './pages/detail/products-detail.component';
import { ProductsCreateComponent } from './pages/create/products-create.component';
import { ProductsListComponent } from './pages/list/products-list.component';


@NgModule({
  declarations: [
    ProductsDetailComponent,
    ProductsCreateComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
