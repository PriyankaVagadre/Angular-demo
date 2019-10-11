import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestcomponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TestcomponentComponent
  ],
})
export class TestmoduleModule { }



