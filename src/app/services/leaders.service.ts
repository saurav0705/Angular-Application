import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }
  getLeaders(){
    return new Promise(resolve=>{
      setTimeout(()=>{resolve(LEADERS)},2000);
    });
  }

  getLeader(id: string){
    return new Promise(resolve=>{setTimeout(()=>{resolve(LEADERS.filter((leader) => (leader.id === id))[0])},2000)});
  }

  getFeaturedLeader() {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((dish) => dish.featured)[0]), 2000);
    });
    }
  }