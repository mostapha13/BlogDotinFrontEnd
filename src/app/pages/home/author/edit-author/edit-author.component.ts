import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/service/author.service';
import { authorDTO } from 'src/app/DTOs/Author/authorDTO';
import { editAuthorDTO } from 'src/app/DTOs/Author/EditauthorDTO';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  @ViewChild('registerEditauthSwal') private registerEditauthSwal: SwalComponent;
  authData:editAuthorDTO;
  editAuthorForm:FormGroup;
  constructor(
    private _activeRoute:ActivatedRoute,
    private _service:AuthorService,
    private _route:Router
  ) { }

  ngOnInit(): void {
var paramCode=this._activeRoute.snapshot.params.id;

this._service.getAuthorById(paramCode).subscribe(res=>{

  this.authData=new editAuthorDTO(
res.data.id,
res.data.firstName,
res.data.lastName,
res.data.userName,
res.data.email,
res.data.isDelete,
res.data.createDate,
res.data.updateDate
  )
this.editAuthorForm=new FormGroup({
  id:new FormControl(this.authData.id,[Validators.required,]),
  firstName:new FormControl(this.authData.firstName,[Validators.required,Validators.maxLength(250)]),
  lastName:new FormControl(this.authData.lastName,[Validators.required,Validators.maxLength(250)]),
  userName:new FormControl(this.authData.userName,[Validators.required,Validators.maxLength(250)]),
  email:new FormControl(this.authData.email,[Validators.required,Validators.maxLength(250)]),
  isDelete:new FormControl(this.authData.isDelete),
  createDate:new FormControl(this.authData.createDate),
  updateDate:new FormControl(this.authData.updateDate)
});
});}

  submitEditAuthor(){
 

    const formEditData=new editAuthorDTO(
this.editAuthorForm.controls.id.value,
this.editAuthorForm.controls.firstName.value,
this.editAuthorForm.controls.lastName.value,
this.editAuthorForm.controls.userName.value,
this.editAuthorForm.controls.email.value,
this.editAuthorForm.controls.isDelete.value,
this.editAuthorForm.controls.createDate.value,
this.editAuthorForm.controls.updateDate.value
    );

    this._service.editAuthor(formEditData).subscribe(res=>{
      console.log(res);
      if(res.status==='success'){
this.registerEditauthSwal.icon='success';
this.registerEditauthSwal.title='موفق';
this.registerEditauthSwal.text='ویرایش با موفقیت انجام شد';
this.registerEditauthSwal.fire()
this._route.navigate(['/authorList']);
this.editAuthorForm.reset();

      }

      if(res.status==='error'){
        this.registerEditauthSwal.icon='error';
        this.registerEditauthSwal.title='خطا';
        this.registerEditauthSwal.text=res.data.info;
        this.registerEditauthSwal.fire()
      }
      
    });
    
  }

}
