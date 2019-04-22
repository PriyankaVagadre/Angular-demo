import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HttpDataFetchComponent } from './http-data-fetch/http-data-fetch.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingComponent } from './setting/setting.component';
import { SettingAddressComponent } from './setting/setting-address/setting-address.component';
import { SettingContactComponent } from './setting/setting-contact/setting-contact.component';
import { MatSlideToggleComponent } from './mat-slide-toggle/mat-slide-toggle.component';

import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
const routes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'class-binding',
    component: BindClassesComponent
  },
  {
    path: 'style-binding',
    component: StyleBindingComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'access-the-dom-element',
    component: TemplateReferenceVariableComponent
  },
  {
    path: 'two-way-data-binding',
    component: TwoWayDataBindingComponent
  },
  {
    path: 'ngIF',
    component: NgIfComponent
  },
  {
    path: 'ngFor',
    component : NgForComponent
  },
  {
    path: 'ngSwitch',
    component : NgSwitchComponent
  },
  {
    path: 'input-output',
    component : InputOutputComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'http',
    component: HttpDataFetchComponent
  },
  {
    path: 'input-masking',
    component: InputMaskComponent
  },
  {
    path: 'mat-slide-toggle',
    component: MatSlideToggleComponent
  },
  {
    path: 'setting',
    component : SettingComponent,
    children : [ // children
       {
         path : '',
         redirectTo : 'contact',
         pathMatch : 'full',
       },
       {
         path : 'contact',
         component : SettingContactComponent
       },
       {
         path : 'address',
         component : SettingAddressComponent
       },
       {
         path : '**',
         component : SettingAddressComponent
       }
    ]
  },
  {
    path : 'department-list',
    component : DepartmentListComponent,
    // children : [
    //   {
    //     path: ':id',
    //     component : DepartmentDetailComponent
    //   }
    // ]
    
  },
  {
    path : 'department-list/:id',
    component : DepartmentDetailComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  PropertyBindingComponent,
  PageNotFoundComponent,
  SettingAddressComponent,
  SettingContactComponent,
  SettingComponent,
  MatSlideToggleComponent,
  InputMaskComponent,
  HttpDataFetchComponent,
  PipesComponent,
  InputOutputComponent,
  NgSwitchComponent,
  NgForComponent,
  NgIfComponent,
  TwoWayDataBindingComponent,
  BindClassesComponent,
  StyleBindingComponent,
  EventBindingComponent,
  TemplateReferenceVariableComponent
]