import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/service/author.service';
import { authorDTO } from 'src/app/DTOs/Author/authorDTO';
import { domainName } from 'src/app/Utilites/Path';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @ViewChild('registerAuthSwal') private registerAuthSwal: SwalComponent;
  authorForm: FormGroup;
  constructor(
    private _service: AuthorService
  ) { }

  ngOnInit(): void {
    this.authorForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(250)
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(250)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(500)

      ]),
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(250)
      ])
    });
  }

  submitAuthor() {
    //console.log(this.authorForm);


    const authData = new authorDTO(
      this.authorForm.controls.firstName.value,
      this.authorForm.controls.lastName.value,
      this.authorForm.controls.userName.value,
      this.authorForm.controls.email.value

    );
    this._service.registerAuthor(authData).subscribe(res => {
      if (res.status === 'success') {
        this.authorForm.reset();
        this.registerAuthSwal.icon = 'success';
        this.registerAuthSwal.title = 'تبریک';
        this.registerAuthSwal.text = 'ثبت نام موفق';
        this.registerAuthSwal.fire();
      }

      if (res.status === 'error') {
        this.registerAuthSwal.icon = 'error';
        this.registerAuthSwal.title = 'خطا';
        this.registerAuthSwal.text = res.data.info;
        this.registerAuthSwal.fire();
      }


    });



  }

}
