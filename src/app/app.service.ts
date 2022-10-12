import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

getAllProducts():any{
  return this.http.get('https://fakestoreapi.com/products')
}

postProduct(body: any):Observable<any> {
  return this.http.post('https://fakestoreapi.com/products',body)
}

updateProduct(body: any, id:number):Observable<any> {
  return this.http.put('https://fakestoreapi.com/products/${id}',body)
}

deleteProduct(id:number):Observable<any> {
  return this.http.delete('https://fakestoreapi.com/products/${id}')
}

 
}
