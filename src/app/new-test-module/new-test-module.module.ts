import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponent // export the componenet
  ]
})
export class NewTestModuleModule { }
