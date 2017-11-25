import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-selector',
  templateUrl: './content-selector.component.html',
  styleUrls: ['./content-selector.component.css']
})
export class ContentSelectorComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
contentSelected(){
  this.router.navigate(['./dashboard/template/createtemplate'])
}
}
