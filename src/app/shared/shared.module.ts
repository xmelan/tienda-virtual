import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCardModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzAvatarModule
  ],
  exports:[
    NzCardModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzAvatarModule,
    NzIconModule
  ]
})
export class SharedModule { }
