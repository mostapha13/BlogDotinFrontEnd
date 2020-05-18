import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubjectDTO } from '../DTOs/Subject/SubjectDTO';
import { domainName } from '../Utilites/Path';
import { Observable, Subject } from 'rxjs';
import { ISubject } from '../DTOs/Subject/ISubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  addSubject(subjectData:SubjectDTO):Observable<any>{
return this.http.post<Observable<any>>(domainName+'/api/Subject/AddSubject',subjectData);
  }


  getAllSubject():Observable<ISubject>{
   return this.http.get<ISubject>(domainName+"/api/subject/GetAllSubject");
  }


  removeSubject(id:number):Observable<any>{
  
    
return this.http.get<Observable<any>>(domainName+"/api/subject/RemoveSubject/"+id);
  }
}
