import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const PRODUCT_API = 'https://productapi20221020174404.azurewebsites.net/api/v1/Seller';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct() : Observable<any> {
    return this.http.get(PRODUCT_API, httpOptions);
  }

  saveProduct(product:any): Observable<any> {
    debugger;
    return this.http.post(PRODUCT_API+'/Add', product, httpOptions);
  }

  deletProduct(productId:string): Observable<any> {
    return this.http.delete(PRODUCT_API+'/Delete/'+productId, httpOptions);
  }

  getBidDetailsByProductID(productId:string): Observable<any> {
    return this.http.get(PRODUCT_API+'/ShowBids/'+productId, httpOptions);
  }
}
