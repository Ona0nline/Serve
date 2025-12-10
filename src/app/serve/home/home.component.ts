import { Component } from '@angular/core';
import { ServeService } from 'src/app/home/serve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private serveService : ServeService )
  {

  }

  upload(){
    this.serveService.upload().subscribe(data => {
      console.log(data)
    })
  }

}
