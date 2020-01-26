import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishServiceService } from '../services/dish-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { com } from '../shared/com';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  CommentForm : FormGroup;
  comment : com;
  @ViewChild('cform',{static: false}) CommentFormDirective;

  dish : Dish;
  dishIds :string[];
  prev: string;
  next: string;
  constructor(private dishservice: DishServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private cf : FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
    this.dishservice.getDishIds()
    .subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
    .pipe(switchMap( (params : Params)=>this.dishservice.getDish(params['id'])))
    .subscribe((dish)=>{this.dish=dish,this.setPrevNext(this.dish.id);});

    

  }
  validationMessages = {
    'author': {
      'required':      'Author is required.',
      'minlength':     'author must be at least 2 characters long.',
    },
    'comment': {
      'required':      'Comment is required.',
      'minlength':     'comment be at least 2 characters long.',
    },
  };

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  goBack(): void {
    this.location.back();
  }

  formErrors = {
    'author':'',
    'comment':'',
  }
  createForm(){
    this.CommentForm = this.cf.group({
      author : ['',[Validators.required,Validators.minLength(2)]],
      comment : ['',[Validators.required,Validators.minLength(2)]],
      rating : [5]

    });

    this.CommentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.CommentForm) { return; }
    const form = this.CommentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        //console.log(control);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          //console.log(messages);
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    console.log("button active");
    this.comment = this.CommentForm.value;
    this.comment.date = Date().toString();
    this.dish.comments.push(this.comment);
    this.CommentForm.reset({
      author:'',
      comment:'',
      rating :5
    });
    this.CommentFormDirective.resetForm({
      author:'',
      comment:'',
      rating :5
    });
    
  }
}
