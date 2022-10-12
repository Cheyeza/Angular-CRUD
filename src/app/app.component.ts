import { Component } from '@angular/core';
import { AppService} from './app.service';
import { Product} from './product';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'My-first';
  name='Products';
  
  constructor(public AppService: AppService, public HttpClient:HttpClient){

  }

  
  ngOnInit(): void {
    
  }

}
