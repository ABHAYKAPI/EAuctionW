import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const PRODUCT_API = 'http://localhost:39088/api/v1/Buyer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http: HttpClient) { }


  saveProduct(product:any): Observable<any> {
    return this.http.post(PRODUCT_API+'/PlaceBid', product, httpOptions);
  }

  updatePrice(productId:string,email:string,updateprice:number): Observable<any> {
    return this.http.put(PRODUCT_API+'/UpdateBid/'+productId+'/'+email+'/'+updateprice, httpOptions);
  }

  
}
