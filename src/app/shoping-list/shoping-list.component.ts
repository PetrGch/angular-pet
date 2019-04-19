import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingrediens: Ingredient[] = [
    new Ingredient('Ingredient 1', 100),
    new Ingredient('Ingredient 2', 200),
    new Ingredient('Ingredient 3', 300)
  ];

  constructor() { }

  ngOnInit() {
  }

}
