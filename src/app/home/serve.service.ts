import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private httpClient : HttpClient) { 

  }

  upload() : Observable<JSON> {
    return this.httpClient.get<JSON>("http://127.0.0.1:8000")
  }
}
