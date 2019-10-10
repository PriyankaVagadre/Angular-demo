import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // import http module
// import { TextMaskModule } from 'angular2-text-mask';
import {NgxMaskModule} from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ErrorsModule } from './http-errors/errors.module';
// import { AboutModule } from './lazy-loading/about/about.module';
// import { ViewdetailsModule } from './lazy-loading/viewdetails/viewdetails.module';

import {MatIconModule} from '@angular/material/icon';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { TopNavbarComponent } from './base-layout/top-navbar/top-navbar.component' //mat icon;
import { SideNavabarComponent } from './base-layout/side-navabar/side-navabar.component';
import { BaseContainerComponent } from './base-layout/base-container/base-container.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { HightLightBackground } from './attribute-directive/normal-directive/highlight-bg.directive';
import { BetterHightlightDirective } from './attribute-directive/better-directive/better-hightlight.directive';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { PdfComponent } from './pdf/pdf.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
  MatDialogModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatNativeDateModule, MatOptionModule, MatSelectModule, MatMenuModule,
  MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule, MatGridListModule, MatGridList,
  MatGridTile, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule
} from '@angular/material';
import { NewAccountComponent } from './service-test/new-account/new-account.component';
import { AccountComponent } from './service-test/account/account.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserstatusComponent } from './subject observable/userstatus/userstatus.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
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
    ServerElementComponent,
    SideNavabarComponent,
    BaseLayoutComponent,
    TopNavbarComponent,
    BaseContainerComponent,
    AttributeDirectiveComponent,
    HightLightBackground,
    BetterHightlightDirective,
    RxjsOperatorsComponent,
    FileUploadComponent,
    PdfComponent,
    AccountComponent,
    NewAccountComponent,
    FileUploadComponent,
    FileSelectDirective,
    FileDropDirective,
    UserstatusComponent

  ],
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule,
    MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule,
    MatMenuModule, MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule
,
    FormsModule,
    PdfViewerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NewTestModuleModule , // import test module;
    NewProjectModule,
    TestmoduleModule,
    ErrorsModule,
    ReactiveFormsModule,
    MatIconModule, //mat icon;
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  exports : [DateCustomPipeComponent, MatIconModule]
})
export class AppModule { }
