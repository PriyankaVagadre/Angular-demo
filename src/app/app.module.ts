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
import { HeaderComponent } from './new-project/header/header.component';
import { RecipeDetailComponent } from './new-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './new-project/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './new-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './new-project/recipes/recipes.component';
import { ShopingListComponent } from './new-project/shoping-list/shoping-list.component';
import { ShopingEditComponent } from './new-project/shoping-list/shoping-edit/shoping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HomeComponent,
    NgclassComponent,
    DateCustomPipeComponent,
    NgGridComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    ShopingListComponent,
    ShopingEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NewTestModuleModule , // import test module;
    TestmoduleModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [DateCustomPipeComponent]
})
export class AppModule { }
