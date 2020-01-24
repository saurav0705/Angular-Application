import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leader';
import {of,Observable} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }
  getLeaders(){
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string){
    return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeader() {
    return of(LEADERS.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    
  }

}