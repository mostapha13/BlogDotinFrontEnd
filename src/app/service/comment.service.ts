import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { domain } from 'process';
import { domainName } from '../Utilites/Path';
import { CommentList } from '../DTOs/Comment/CommentList';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http:HttpClient
  ) { }


  getAllPost():Observable<any>
  {
return this.http.get(domainName+'/api/Post/GetPostForComboBox');
  }

  registerComment(commentData):Observable<any>{
return this.http.post(domainName+'/api/Comment/AddComment',commentData);
  }

  getAllCommentList():Observable<CommentList>{
return this.http.get<CommentList>(domainName+'/api/Comment/GetAllCommentList');
  }


}
