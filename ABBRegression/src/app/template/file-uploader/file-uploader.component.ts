import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
fileUpload(){
  this.router.navigate(['./dashboard/template/contentselector'])
}
}
