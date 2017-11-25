import { Component, OnInit, ViewChild, NgModule, ViewEncapsulation  } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataTable, DataTableResource } from 'angular-2-data-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit {

  constructor () {
  }
  ngOnInit(){
  }
}
