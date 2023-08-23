import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():Food[] {
    return sample_foods;
  }

  getAllFoodSearch(searchTerm:string) {
    return this.getAllFood().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodByTag(tag:string):Food[] {
    return tag == 'All'? this.getAllFood() : this.getAllFood().filter(food => food.tags?.includes(tag));
  }

  getFoddById(foodId:string) {
    return this.getAllFood().find(food => food.id == foodId) ?? new Food();
  }
}
