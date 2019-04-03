import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; // import http module

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { BindClassesComponent } from './bind-classes/bind-classes.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { NgIfComponent } from './structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './structural-directive/ng-switch/ng-switch.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpDataFetchComponent } from './http-data-fetch/http-data-fetch.component';
import { LoginComponent } from './login/login.component'; // login component
import { RegisterComponent } from './register/register.component'; // register component

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    BindClassesComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayDataBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    InputOutputComponent,
    PipesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    HttpDataFetchComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
