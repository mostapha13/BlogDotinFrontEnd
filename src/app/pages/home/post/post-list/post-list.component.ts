import { Component, OnInit, ViewChild } from '@angular/core';
import { Posts } from 'src/app/DTOs/Post/Posts';
import { PostService } from 'src/app/service/post.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @ViewChild('removepostSwal') private removepostSwal: SwalComponent;
postList:Posts[];
  constructor(
    private _service:PostService
  ) { }

  ngOnInit(): void {
this._service.getAllPost().subscribe(res=>{
  
  this.postList=res;
  
})
  }

  removepost(i){
    if(confirm("آیا مطمئن هستید؟"))
    {
this._service.removePost(i).subscribe(res=>{
  if(res.status==='success'){
this.removepostSwal.icon='success';
this.removepostSwal.title='تبریک';
this.removepostSwal.text='حذف با موفقیت انجام شد';
this.removepostSwal.fire();

this._service.getAllPost().subscribe(res=>{
  
  this.postList=res;
  
})

  }


  if(res.status==='error'){
    this.removepostSwal.icon='error';
    this.removepostSwal.title='خطا';
    this.removepostSwal.text=res.data.info;
    this.removepostSwal.fire();
  }
  
});
    }
   
  }

}
