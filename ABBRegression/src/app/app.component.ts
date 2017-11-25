import { Component, ViewEncapsulation } from '@angular/core';
import '../assets/js/material.min.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/css/material.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
