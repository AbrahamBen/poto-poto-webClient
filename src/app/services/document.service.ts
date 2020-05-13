import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Document} from '../common/document';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = "http://localhost:9090/api/mairie/documents";
  constructor(private httpClient: HttpClient) { }

  public getDocuments(): Observable<Document[]>{
    return this.httpClient.get<GetResponseDocuments>(this.baseUrl).pipe(
      map(response => response._embedded.documents)
    );
  }
}

interface GetResponseDocuments {
  _embedded:{
    documents: Document[];
  }
}
