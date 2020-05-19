import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthorForCombo } from '../DTOs/Post/IAuthorForCombo';
import { domainName } from '../Utilites/Path';
import { ISubjectForCombo } from '../DTOs/Post/ISubjectForCombo';
import { postDTO } from '../DTOs/Post/postDTO';
 

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http:HttpClient
  ) { }


getAllAuthor():Observable<IAuthorForCombo>{
  return this.http.get<IAuthorForCombo>(domainName+'/api/Author/GetAuthorForComboBox');
}

getAllSubject():Observable<ISubjectForCombo>{
  return this.http.get<ISubjectForCombo>(domainName+'/api/Subject/GetSubjectForComboBox');
};


registerPost(postData:postDTO):Observable<any>{
return this.http.post<Observable<any>>(domainName+'/api/Post/AddPost',postData);
}


getAllPost():Observable<any>{
return this.http.get(domainName+'/api/Post/GetPostForList');
}


removePost(i):Observable<any>{
 return this.http.get<Observable<any>>(domainName+'/api/Post/RemovePost/'+i);
}

}
