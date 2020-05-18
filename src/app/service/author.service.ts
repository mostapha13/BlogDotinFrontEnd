import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authorDTO } from '../DTOs/Author/authorDTO';
import { Observable } from 'rxjs';
import { domainName } from '../Utilites/Path';
import { IAuthor } from '../DTOs/Author/IAuthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http:HttpClient
  ) { }


registerAuthor(authData:authorDTO):Observable<any>{

return this.http.post<Observable<any>>(domainName+'/api/Author/AddAuthor',authData);
}


getAllAuthor():Observable<IAuthor>{

return this.http.get<IAuthor>(domainName+'/api/Author/GetAllAuthour');
}


removeAuth(i:string):Observable<any>{
 
  return this.http.get<Observable<any>>(domainName+"/api/Author/RemoveAuthor/"+i);
}


}
