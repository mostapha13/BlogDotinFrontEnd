import { Component, OnInit, ViewChild } from '@angular/core';
import { IAuthorForCombo } from 'src/app/DTOs/Post/IAuthorForCombo';
import { PostService } from 'src/app/service/post.service';
import { ISubjectForCombo } from 'src/app/DTOs/Post/ISubjectForCombo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { strict } from 'assert';
import { postDTO } from 'src/app/DTOs/Post/postDTO';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @ViewChild('registerPostSwal') private registerPostSwal: SwalComponent;

  authorList: IAuthorForCombo;
  subjectList: ISubjectForCombo;

  public selectedValueForAuth;
  public selectedValueForSubject;

  postForm: FormGroup;

  constructor(
    private _service: PostService
  ) { }

  ngOnInit(): void {

    this.selectedValueForAuth = 0;
    this.selectedValueForSubject = 0;
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(250)
      ]),
      authorId: new FormControl(null, [
        Validators.required
      ]),
      subjectId: new FormControl(null, [
        Validators.required
      ]),
      text: new FormControl(null, [
        Validators.required
      ])
    });




    this._service.getAllAuthor().subscribe(res => {

      this.authorList = res

    });

    this._service.getAllSubject().subscribe(res => {

      this.subjectList = res;

    });

  }


  submitPost() {
    // console.log(this.postForm);



    const postData = new postDTO(
      this.postForm.controls.title.value,
      this.postForm.controls.authorId.value,
      this.postForm.controls.subjectId.value,
      this.postForm.controls.text.value
    );


    this._service.registerPost(postData).subscribe(res => {

      if (res.status === 'success') {
        this.postForm.reset();
        this.registerPostSwal.icon='success';
        this.registerPostSwal.title='موفق';
        this.registerPostSwal.text='ثبت پست با موفقیت انجام شد.';
        this.registerPostSwal.fire();


      }

      if(res.status==='error'){

        this.registerPostSwal.icon='error';
        this.registerPostSwal.title='خطا';
        this.registerPostSwal.text=res.data.info;
        this.registerPostSwal.fire();

      }
   
      

    });
  }

 

}
