import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestcomponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TestcomponentComponent
  ],
})
export class TestmoduleModule { }



