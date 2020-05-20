import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { subject } from 'src/app/DTOs/Subject/subject';
import { ShowBlogService } from 'src/app/service/show-blog.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {
  allSubject: subject[];
  constructor(
    private _showBlogService: ShowBlogService,
    private _dashboardService: DashboardService,
  ) { }

  ngOnInit(): void {


    // this._dashboardService.getAllSubjectPost(1).subscribe(res => {
    //   console.log(res);
    //   if (res.status === 'success') {
    //     this.allSubject = res.data
    //   }
    // });
   
    this._dashboardService.getAllSubject().subscribe(res=>{
    
      this.allSubject=res.data;
      
      
    });

  }

  // showPostSubject(i) {
  //   this._showBlogService.getAllSubjectPost(i).subscribe(res => {


  //     if (res.status === 'success') {
  //       this.allSubject = res.data


  //     }
  //   });
  // }


}
