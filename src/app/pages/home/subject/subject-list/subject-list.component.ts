import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';
import { ISubject } from 'src/app/DTOs/Subject/ISubject';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
    
  @ViewChild('removesubjectSwal') private removesubjectSwal: SwalComponent;
subjects:ISubject;
  constructor(
    private _service:SubjectService
  ) { }

  ngOnInit(): void {
this._service.getAllSubject().subscribe(res=>{
  if(res.status==='success')
  {
     this.subjects=res
  }
 
});

  }


  removeSubject(id:number){
 if(confirm("آیا مطمئن هستید؟"))
  {
    this._service.removeSubject(id).subscribe(res=>{
      if(res.status==='success'){
        this.removesubjectSwal.icon='success';
        this.removesubjectSwal.title='تبریک';
        this.removesubjectSwal.text='عملیات مورد نظر با موفقیت انجام گردید';
        this.removesubjectSwal.fire();


        this._service.getAllSubject().subscribe(res=>{
          if(res.status==='success')
          {
             this.subjects=res
          }
         
        });

      }
      if(res.status==='error'){
        this.removesubjectSwal.icon='error';
        this.removesubjectSwal.title='خطا';
        this.removesubjectSwal.text=res.data.info;
        this.removesubjectSwal.fire();
      }
    });

}

  }

}
