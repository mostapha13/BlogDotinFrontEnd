import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubjectDTO } from 'src/app/DTOs/Subject/SubjectDTO';
import { SubjectService } from 'src/app/service/subject.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @ViewChild('registersubjectSwal') private registersubjectSwal: SwalComponent;
  subjectForm:FormGroup;
  constructor(
    private _service:SubjectService
  ) { }

  ngOnInit(): void {
       this.subjectForm=new FormGroup({
        title:new FormControl(null,[
       Validators.required,
       Validators.maxLength(250)
     ])
   });
  };
  
  submitSubject(){
const sub=new SubjectDTO(
  this.subjectForm.controls.title.value
)
 

this._service.addSubject(sub).subscribe(res=>{
 
  
if(res.status==='success'){
  this.subjectForm.reset();
        this.registersubjectSwal.icon = 'success';
        this.registersubjectSwal.title = 'موفق';
        this.registersubjectSwal.text = 'ثبت گروه با موفقیت انجام شد ';
        this.registersubjectSwal.fire();
}

if(res.status==='error'){
  this.registersubjectSwal.icon = 'error';
  this.registersubjectSwal.title = 'خطا';
  this.registersubjectSwal.text = res.data.info;
  this.registersubjectSwal.fire();
}


});


  }


}

