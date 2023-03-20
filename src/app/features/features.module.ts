import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { ProductsListComponent } from './products/pages/list/products-list.component';
import { ProductsCreateComponent } from './products/pages/create/products-create.component';
import { ProductsDetailComponent } from './products/pages/detail/products-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,

  ]
})
export class FeaturesModule { }
