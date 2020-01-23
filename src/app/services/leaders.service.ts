import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {

  constructor() { }
  getLeaders(){
    return LEADERS;
  }

  getLeader(id: string){
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader() {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
