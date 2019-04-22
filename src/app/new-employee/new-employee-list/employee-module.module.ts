import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeListComponent } from './new-employee-list.component';

@NgModule({
  declarations: [NewEmployeeListComponent],
  imports: [
    CommonModule
  ],
  exports: [NewEmployeeListComponent] // export the componenet
})
export class EmployeeModuleModule { }

