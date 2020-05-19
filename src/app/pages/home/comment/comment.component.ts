import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from 'src/app/service/comment.service';
import { ICommentForComboBox } from 'src/app/DTOs/Comment/ICommentForComboBox';
import { CommentDTO } from 'src/app/DTOs/Comment/CommentDTO';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  @ViewChild('registerCommentSwal') private registerCommentSwal: SwalComponent;

  postList:ICommentForComboBox;
  commentForm:FormGroup;


  constructor(
    private _service:CommentService
  ) { }


  ngOnInit(): void {
    this.commentForm=new FormGroup({
      postId:new FormControl(null,[
        Validators.required
      ]),
      text:new FormControl(null,[
        Validators.required,
        Validators.maxLength(1500)
      ])
    });


this._service.getAllPost().subscribe(res=>{
  
  this.postList=res;
});


  }

  submitComment(){
   
  const commentData=new CommentDTO(
    this.commentForm.controls.postId.value,
    this.commentForm.controls.text.value
  );

  this._service.registerComment(commentData).subscribe(res=>{
    console.log(res);
    if(res.status==='success'){
this.registerCommentSwal.icon='success';
this.registerCommentSwal.title='موفق';
this.registerCommentSwal.text='ثبت کامنت با موفقیت انجام شد';
this.registerCommentSwal.fire();
this.commentForm.reset();    
}


    if(res.status==='error'){
      this.registerCommentSwal.icon='error';
      this.registerCommentSwal.title='خطا';
      this.registerCommentSwal.text=res.data.info;
      this.registerCommentSwal.fire();
    }
    
  });
   
  }

}
