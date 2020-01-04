import { Component, OnInit } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PromotionsService } from '../services/promotions.service';
import { Dish } from '../shared/dish';
import {DishServiceService} from '../services/dish-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish : Dish;
  promotion : Promotion;
  constructor(private dishservice: DishServiceService,
    private promotionservice: PromotionsService ) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
