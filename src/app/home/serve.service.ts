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

  upload(formData: FormData) : Observable<any> {
    
    for (let pair of (formData as any).entries()) {
      console.log(pair[0], pair[1]);
    }
    return this.httpClient.post(this.uploadUrl, formData)
  }
}
