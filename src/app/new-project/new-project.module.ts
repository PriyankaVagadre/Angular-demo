import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shoping-list/shopping-list.component';
import { ShoppingEditComponent } from './shoping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ]
})
export class NewProjectModule { }
