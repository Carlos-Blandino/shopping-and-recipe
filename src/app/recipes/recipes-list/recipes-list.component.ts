import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://crystalandcomp.com/wp-content/uploads/2018/02/Irish-Nachos-4.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://crystalandcomp.com/wp-content/uploads/2018/02/Irish-Nachos-4.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://crystalandcomp.com/wp-content/uploads/2018/02/Irish-Nachos-4.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
