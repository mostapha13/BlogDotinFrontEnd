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


  removeComment(i){
alert(i);
  }

}
