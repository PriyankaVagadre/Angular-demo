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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
