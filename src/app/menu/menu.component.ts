import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishServiceService } from '../services/dish-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes :Dish[];
  selectedDish : Dish;
  constructor(private dishService : DishServiceService) { }
  onSelect(dish){
    this.selectedDish = dish;
  }
  ngOnInit() {
    this.dishService.getDishes().subscribe((dish)=>{
      this.dishes=dish;
    });
  }

}
