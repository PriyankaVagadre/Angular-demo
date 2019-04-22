import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // import http module
// import { TextMaskModule } from 'angular2-text-mask';
import {NgxMaskModule} from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './apidata/basics-of-angular/property-binding/property-binding.component';
import { BindClassesComponent } from './apidata/basics-of-angular/bind-classes/bind-classes.component';
import { StyleBindingComponent } from './apidata/basics-of-angular/style-binding/style-binding.component';
import { EventBindingComponent } from './apidata/basics-of-angular/event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './apidata/basics-of-angular/template-reference-variable/template-reference-variable.component';
import { TwoWayDataBindingComponent } from './apidata/basics-of-angular/two-way-data-binding/two-way-data-binding.component';
import { NgIfComponent } from './structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './structural-directive/ng-switch/ng-switch.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PipesComponent } from './apidata/basics-of-angular/pipes/pipes.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { HttpDataFetchComponent } from './http-data-fetch/http-data-fetch.component';
import { LoginComponent } from './login/login.component'; // login component
import { RegisterComponent } from './register/register.component'; // register component
import { InputMaskComponent } from './apidata/basics-of-angular/input-mask/input-mask.component';
import { EmployeeModuleModule } from './new-employee/new-employee-list/employee-module.module';
import { NewTestModuleModule } from './new-test-module/new-test-module.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './apidata/basics-of-angular/page-not-found/page-not-found.component';
import { SettingComponent } from './setting/setting.component';
import { SettingAddressComponent } from './setting/setting-address/setting-address.component';
import { SettingContactComponent } from './setting/setting-contact/setting-contact.component';
import { MatSlideToggleComponent } from './apidata/basics-of-angular/mat-slide-toggle/mat-slide-toggle.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
//import {MatSlideToggleModule} from '@angular/material/slide-toggle'; //module for slide toggle


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
    RegisterComponent,
    InputMaskComponent,
    HomeComponent,
    PageNotFoundComponent,
    SettingComponent,
    SettingAddressComponent,
    SettingContactComponent,
    MatSlideToggleComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EmployeeModuleModule, // import module;
    // TextMaskModule
    NgxMaskModule.forRoot(),
    NewTestModuleModule , // import test module;
    //MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
