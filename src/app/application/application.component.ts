import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { AppService} from '../app.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

 list!:any;
 product: Product ={
 
 };
 

  constructor(private AppService:AppService){
    
  };
  

  ngOnInit(): void {

    this.AppService.getAllProducts().subscribe((Response: any)=>{
      this.list = Response;
      console.log(this.list);
    })
  }
  

}
