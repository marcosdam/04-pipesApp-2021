import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';



@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
