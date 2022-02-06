import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/internal/operators';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  /** Get Menu List **/
  getMenuList() {
    return this.http.get(`${this.baseUrl}/api/core/menu/`).pipe(
      map((res) => {
        return res;
      }), catchError(this.handleError));
  }

  /** Get Menu List **/
  getMenuListForFooter(data : any) {
    return this.http.get(`${this.baseUrl}/api/core/menu/`, data).pipe(
      map((res) => {
        return res;
      }), catchError(this.handleError));
  }

  /** Get Core page Data**/
  getCorePage() {
    return this.http.get(`${this.baseUrl}/api/core/core-page/`).pipe(
        map((res) => {
            return res;
    }),catchError(this.handleError));
  }

  /** Get Company Profile**/
  getCompanyProfile() {
    return this.http.get(`${this.baseUrl}/api/admin/company-profile/`).pipe(
        map((res) => {
            return res;
    }),catchError(this.handleError));
  }

  /** Get Core page Data**/
  getSocialMedia() {
    return this.http.get(`${this.baseUrl}/api/admin/social-link/`).pipe(
        map((res) => {
            return res;
    }),catchError(this.handleError));
  }

  /** Get Core page detail**/
  getCorePageDetail(data: any) {
    console.log(data);
    return this.http.get(`${this.baseUrl}/api/core/core-page/`+data).pipe(
        map((res) => {
            return res;
    }),catchError(this.handleError));
  }

}
