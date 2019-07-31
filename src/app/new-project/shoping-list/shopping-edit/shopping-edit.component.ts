import { Component, OnInit, ElementRef , ViewChild, Output , EventEmitter} from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('IngredientName') IngredientNameLocal : ElementRef;
  @ViewChild('IngredientAmount') IngredientAmountLocal : ElementRef;
  @Output() IngredientFun = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    const shipName = this.IngredientNameLocal.nativeElement.value;
    const shipAmount = this.IngredientAmountLocal.nativeElement.value
    const newIngredient = new Ingredient(shipName, shipAmount)
    this.IngredientFun.emit(newIngredient);
  }
}
