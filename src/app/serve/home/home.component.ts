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
  recipe: string = ""
  uploadedImages: string[] = []; 
  spinner = true
  hasGenerated = false

  constructor(private serveService : ServeService ){}

  // Method for html
  onFileSelect(event: any){

    const images = event.target.files

    this.uploadedImages = []

    for (let image of images){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImages.push(e.target.result);  // Base64 image URL
      };
      reader.readAsDataURL(image);
    }
    
    if (images){
      this.selectedFiles = Array.from(images)
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
    formData.append('ingredients', file)
  })
  
  this.serveService.upload(formData).subscribe(data => {
    this.recipe = data
    this.spinner = false
    this.hasGenerated = true
    console.log(data)
  })
  }

}
