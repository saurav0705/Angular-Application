import { Component, OnInit } from '@angular/core';
import { LeadersService } from '../services/leaders.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders;
  constructor(private leaderService : LeadersService) { }

  ngOnInit() {
    this.leaderService.getLeaders().then((leaders)=>{this.leaders=leaders});
    console.log(this.leaders);
  }

}
