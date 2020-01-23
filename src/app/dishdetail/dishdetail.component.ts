import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishServiceService } from '../services/dish-service.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
   
  dish : Dish;
  constructor(private dishservice: DishServiceService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.dishservice.getDish(id).then((dish)=>{this.dish=dish});

  }
  goBack(): void {
    this.location.back();
  }

}
