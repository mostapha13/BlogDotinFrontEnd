import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { domain } from 'process';
import { domainName } from '../Utilites/Path';
import { Observable } from 'rxjs';
import { IAuthor } from '../DTOs/Author/IAuthor';
import { ISubject } from '../DTOs/Subject/ISubject';
import { CommentList } from '../DTOs/Comment/CommentList';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http:HttpClient
  ) { }


getAllAuthor():Observable<IAuthor>{
  return this.http.get<IAuthor>(domainName+'/api/Author/GetAllAuthour');
}

getAllSubject():Observable<ISubject>{
  return this.http.get<ISubject>(domainName+"/api/subject/GetAllSubject");
 }

getAllPost():Observable<any>{
  return this.http.get<any>(domainName+'/api/Post/GetPostForList');
}


getAllCommentList():Observable<CommentList>{
  return this.http.get<CommentList>(domainName+'/api/Comment/GetAllCommentList');
    }

}
