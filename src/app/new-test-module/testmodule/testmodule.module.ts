import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

@NgModule({
  declarations: [TestcomponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TestcomponentComponent
  ],
})
export class TestmoduleModule { }
