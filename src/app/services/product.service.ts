import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, delay, shareReplay, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://retoolapi.dev/U1A9pK/products/';
  private http = inject(HttpClient);

  products$!: Observable<Product[]>;

  constructor() {
    this.initProducts();
  }

  initProducts() {
    this.products$ = this.http.get<Product[]>(this.baseUrl);
  }
}
