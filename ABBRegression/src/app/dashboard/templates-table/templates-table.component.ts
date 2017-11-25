import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, ServerDataSource  } from 'ng2-smart-table';
import { Http } from '@angular/http';

@Component({
  selector: 'app-templates-table',
  templateUrl: './templates-table.component.html',
  styleUrls: ['./templates-table.component.css']
})
export class TemplatesTableComponent implements OnInit {
  data: any;
  source: ServerDataSource;
  constructor(http:Http) {
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:3000/template' });
  }
settings = {
  mode:'inline',
    pager:{
    display:true,
    perPage:10
  },
  columns: {
    templateName: {
      title: 'Template Name',
      editable : false,
      filter:true
    },
    createdDate: {
      title: 'Created on',
      editable : false,
      filter : false,
      valuePrepareFunction : (value) => {return new Date(value).toDateString()}
    },
    LastModified: {
      title: 'Last Modified',
      editable : false,
      filter : false,
      valuePrepareFunction : (value) => {return (value) ? value : "-"}
    }
  },
  actions:{
    position: "right",
    add:false
  }
};

  ngOnInit() {
  }

}
