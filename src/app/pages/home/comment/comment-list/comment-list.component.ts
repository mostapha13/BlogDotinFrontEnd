import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentList } from 'src/app/DTOs/Comment/CommentList';
import { CommentService } from 'src/app/service/comment.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @ViewChild('removeCommentSwal') private removeCommentSwal: SwalComponent;
comments:CommentList;
  constructor(
    private _service:CommentService
  ) { }

  ngOnInit(): void {
this._service.getAllCommentList().subscribe(res=>{
  this.comments=res;
});
  }

  

  removeComment(i) {

    if(confirm("آیا مطمئن هستید؟")){
      this._service.removeComment(i).subscribe(res => {
     
          
        if(res.status==='success')
        {
          this.removeCommentSwal.icon='success';
          this.removeCommentSwal.title='موفق';
          this.removeCommentSwal.text='عملیات مورد نظر با موفقیت انجام گردید';
          this.removeCommentSwal.fire();
         
          this._service.getAllCommentList().subscribe(res=>{
            this.comments=res;
          });
        }
    
        if(res.status==='error'){
    
          this.removeCommentSwal.icon='error';
          this.removeCommentSwal.title='خطا';
          this.removeCommentSwal.text=res.data.info;
          this.removeCommentSwal.fire();
        }
    
      });
    }
      }
    
    











}
