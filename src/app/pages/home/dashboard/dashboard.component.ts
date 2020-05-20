import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { author } from 'src/app/DTOs/Author/author';
import { subject } from 'src/app/DTOs/Subject/subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allUser:author[];
  allPost;
  allSubject:subject[];
  allComment;
  constructor(
    private _service:DashboardService
  ) { }

  ngOnInit(): void {
  this._service.getAllAuthor().subscribe(res=>{
   
    if(res.status==='success'){
      this.allUser=res.data;
    }


    this._service.getAllPost().subscribe(res=>{
      this.allPost=res
    });

this._service.getAllSubject().subscribe(res=>{

 if(res.status==='success'){
  this.allSubject=res.data
 }
});
   
this._service.getAllCommentList().subscribe(res=>{
  this.allComment=res
});
    
  })
  
  
  
  }

}
