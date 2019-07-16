import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyBindingComponent } from './basics-of-angular/property-binding/property-binding.component';
import { BindClassesComponent } from './basics-of-angular/bind-classes/bind-classes.component';
import { StyleBindingComponent } from './basics-of-angular/style-binding/style-binding.component';
import { EventBindingComponent } from './basics-of-angular/event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './basics-of-angular/template-reference-variable/template-reference-variable.component';
import { TwoWayDataBindingComponent } from './basics-of-angular/two-way-data-binding/two-way-data-binding.component';
import { NgIfComponent } from './basics-of-angular/structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './basics-of-angular/structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './basics-of-angular/structural-directive/ng-switch/ng-switch.component';
import { PipesComponent } from './basics-of-angular/pipes/pipes.component';
import { InputMaskComponent } from './basics-of-angular/input-mask/input-mask.component';
import { PageNotFoundComponent } from './basics-of-angular/page-not-found/page-not-found.component';
import { SettingComponent } from './setting/setting.component';
import { SettingAddressComponent } from './setting/setting-address/setting-address.component';
import { SettingContactComponent } from './setting/setting-contact/setting-contact.component';
import { MatSlideToggleComponent } from './basics-of-angular/mat-slide-toggle/mat-slide-toggle.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CloseTabComponent } from './close-tab/close-tab.component';
import { RouterSnapshotComponent } from './router-snapshot/router-snapshot.component';
import { HomeComponent } from './home/home.component';
// import { LoadingCellRenderer } from 'ag-grid-community/dist/lib/rendering/cellRenderers/loadingCellRenderer';
import { HomeHazyComponent } from './lazy-loading/home-lazy/home.component';

// import { AboutModule } from './lazy-loading/about/about.module';
// import { ViewdetailsModule } from './lazy-loading/viewdetails/viewdetails.module';

const routes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
  // {
  //   path: 'input-output',
  //   component :
  // },
  {
    path: 'pipes',
    component: PipesComponent
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
    path : 'close',
    component : CloseTabComponent
  },
  {
    path : 'query-string',
    component : RouterSnapshotComponent
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
  // { path: '**',
  //   component: PageNotFoundComponent
  // },

  {
    path: "lazy-loading-home",
    component : HomeHazyComponent

  },
  {
    path: "lazy-loading-about",
    // component : LazyLoadingComponent
    loadChildren : './lazy-loading/about/about.module#AboutModule'

  },
  {
    path: "lazy-loading-viewdetails",
    // component : LazyLoadingComponent
    loadChildren : './lazy-loading/viewdetails/viewdetails.module#ViewdetailsModule'

  },
  {
    path: "error-page",
    loadChildren : './http-errors/errors.module#ErrorsModule'
  }


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
  PipesComponent,
  NgSwitchComponent,
  NgForComponent,
  NgIfComponent,
  TwoWayDataBindingComponent,
  BindClassesComponent,
  StyleBindingComponent,
  EventBindingComponent,
  TemplateReferenceVariableComponent,
  DepartmentListComponent,
  DepartmentDetailComponent,
  EmployeeListComponent,
  EmployeeDetailsComponent,
  CloseTabComponent,
  RouterSnapshotComponent
]
