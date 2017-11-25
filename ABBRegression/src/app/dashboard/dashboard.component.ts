import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router,NavigationStart  } from '@angular/router';

@Component({
  selector: 'app-dashboard',
   styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
 
})
export class DashboardComponent implements OnInit {
  title: string;

  constructor(private router: Router) {
   }
  ngOnInit() {
  }

}