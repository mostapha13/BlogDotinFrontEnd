import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { domainName } from '../Utilites/Path';

@Injectable({
  providedIn: 'root'
})
export class ShowBlogService {

  constructor(
    private http:HttpClient
  ) { }


  getAllSubjectPost(id:number):Observable<any>{
    return this.http.get<any>(domainName+'/api/Subject/AllSubjectPost/'+id);
  }
}
