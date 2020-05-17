import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.authorForm=new FormGroup({
     firstName:new FormControl(null,[
       Validators.required
     ]) ,
     lastName:new FormControl(null,[
       Validators.required
     ]),
     email:new FormControl(null,[
       Validators.required,
       Validators.email
     ]),
     userName:new FormControl(null,[
       Validators.required
     ])
    });
  }

  submitAuthor()
  {
    console.log(this.authorForm);
    
  }

}
