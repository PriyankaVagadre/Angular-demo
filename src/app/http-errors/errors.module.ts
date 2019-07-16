import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors/errors.component';
import { ErrorRoutingModule } from './errors-routing.module';

@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
  ],
  exports:[
    ErrorsComponent,
  ]
})
export class ErrorsModule { }
