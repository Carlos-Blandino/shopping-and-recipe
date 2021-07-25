import { Component, OnInit } from '@angular/core';
import { IngredientModel} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
    new IngredientModel('Onions', 2),
    new IngredientModel('Noodles', 1)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
