import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/stuffed-pasta-bake-bolognese-2a0e5e3.jpg?quality=90&resize=500%2C454')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
