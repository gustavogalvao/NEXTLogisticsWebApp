import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';  

/*
import { catchError, map, tap } from 'rxjs/operators';


import 'rxjs/add/observable/of';  
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/do';  
import 'rxjs/add/operator/map'; 
*/

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, OPTIONS", "Access-Control-Allow-Headers": "session-variable" })
};

@Injectable()
export class ProductService {

  private productsUrl = 'https://demo.stylearcade.com.au/api/demo/client/data/'; 

  private log(message: string) {
    console.log('ProductService: ' + message);
  }

  /* mock-products.ts 
  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(PRODUCTS);
  }
  */
    
  getProducts (): Observable<Product[]> {
      return this.http.get<Product[]>(this.productsUrl)
          .catch(this.handleError('getProducts', [])
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

}
