import { Component } from '@angular/core';
import { ServeService } from 'src/app/home/serve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // List of files uploaded
  selectedFiles: File[] = []

  constructor(private serveService : ServeService ){}

  // Method for html
  onFileSelect(event: any){
    const target = event.target as HTMLInputElement
    if (target.files){
      this.selectedFiles = Array.from(target.files)
      console.log("Selected files: ", this.selectedFiles)
    }

  }


  upload(){
    if(!this.selectedFiles.length){
    console.log("Empty")
    return; // Add return to prevent execution
  }

  const formData = new FormData()
  this.selectedFiles.forEach(file => {
    formData.append('ingredient', file)
  })
  
  // Call service ONCE after adding all files
  this.serveService.upload(formData).subscribe(data => {
    console.log(data)
  })
  }

}
