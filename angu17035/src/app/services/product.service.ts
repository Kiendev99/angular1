import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get<any>(`${this.API_URL}/products`)
  }
}
