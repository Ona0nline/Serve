import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  uploadUrl: string = "http://localhost:8000/upload"

  constructor(private httpClient : HttpClient) { 

  }

  upload(formData: FormData) : Observable<JSON> {
    return this.httpClient.post<JSON>(this.uploadUrl, formData)
  }
}
