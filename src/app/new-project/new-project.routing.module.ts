import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shoping-list/shopping-list.component';

const routes: Routes = [
  { path: '',
    // redirectTo: '/',
    // pathMatch: 'full',
    component : RecipesComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path : 'shopping-list',
    component : ShoppingListComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewProjectRoutingModule { }
