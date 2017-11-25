import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
addTemplate(){
  this.router.navigate(['dashboard']);
}
}
