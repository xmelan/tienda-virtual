import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UsersCreateComponent } from './pages/users-create/users-create.component';
import { UsersDetailComponent } from './pages/users-detail/users-detail.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersCreateComponent,
    UsersDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
