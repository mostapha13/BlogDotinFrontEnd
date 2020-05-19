import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';
import { IAuthor } from 'src/app/DTOs/Author/IAuthor';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  
  @ViewChild('removeAuthSwal') private removeAuthSwal: SwalComponent;

  authorList: IAuthor;
  constructor(
    private _service: AuthorService,
    private _route:Router
  ) { }

  ngOnInit(): void {
    this._service.getAllAuthor().subscribe(res => {
    
    
      if (res.status == 'success') {
        this.authorList = res;
      }

    });
  }




  removeAuthor(i) {
   
if(confirm("آیا مطمئن هستید؟")){
  this._service.removeAuth(i).subscribe(res => {
 
      
    if(res.status==='success')
    {
      this.removeAuthSwal.icon='success';
      this.removeAuthSwal.title='تبریک';
      this.removeAuthSwal.text='عملیات مورد نظر با موفقیت انجام گردید';
      this.removeAuthSwal.fire();
     
      this._service.getAllAuthor().subscribe(res => {
  
        if (res.status == 'success') {
          this.authorList = res;
        }
  
      });
    }

    if(res.status==='error'){

      this.removeAuthSwal.icon='error';
      this.removeAuthSwal.title='خطا';
      this.removeAuthSwal.text=res.data.info;
      this.removeAuthSwal.fire();
    }

  });
}
  }




  editAuthor(i){
    this._route.navigate(['/editAuthor',i])
  }

  

}
