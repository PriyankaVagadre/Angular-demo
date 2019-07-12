import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // import http module
// import { TextMaskModule } from 'angular2-text-mask';
import {NgxMaskModule} from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule , routingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTestModuleModule } from './new-test-module/new-test-module.module';
import { HomeComponent } from './home/home.component';
import { TestmoduleModule } from './new-test-module/testmodule/testmodule.module';
import { NgclassComponent } from './click/ngclass/ngclass.component';
import { DateCustomPipeComponent } from './date-custom-pipe/date-custom-pipe.component';
import { NgGridComponent } from './ng-grid/ng-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { NewProjectModule } from './new-project/new-project.module';
import { HomeHazyComponent } from './lazy-loading/home-lazy/home.component';

import { ChildComponent } from './input-output-test/child/child.component';
import { ParentComponent } from './input-output-test/parent/parent.component';
import { Child1Component } from './input-output-test/child1/child1.component';
import { Parent1Component } from './input-output-test/parent1/parent1.component';
import { Child2Component } from './input-output-test/child2/child2.component';
import { Parent3Component } from './input-output-test/parent3/parent3.component';
import { CockpitComponent } from './input-output-viewchild/cockpit/cockpit.component';
import { ServerElementComponent } from './input-output-viewchild/server-element/server-element.component';
// import { AboutModule } from './lazy-loading/about/about.module';
// import { ViewdetailsModule } from './lazy-loading/viewdetails/viewdetails.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HomeComponent,
    NgclassComponent,
    DateCustomPipeComponent,
    NgGridComponent,
    HomeHazyComponent,
    ChildComponent,
    ParentComponent,
    Child1Component,
    Parent1Component,
    Child2Component,
    Parent3Component,
    CockpitComponent,
    ServerElementComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NewTestModuleModule , // import test module;
    NewProjectModule,
    TestmoduleModule,

    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [DateCustomPipeComponent]
})
export class AppModule { }
