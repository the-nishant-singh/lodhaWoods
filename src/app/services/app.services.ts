import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'https://lodhawoods-be.herokuapp.com'


@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
  public sendTopMail(body: any): Observable<any>{
    return this.http
      .post(`${API_URL}/sendTopForm`, body,  {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })})
      .map((response: any) => response)
      .catch(this.handleError);
  }

  public sendBottomMail(body: any): Observable<any>{
    return this.http
      .post(`${API_URL}/sendBottomForm`, body,  {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })})
      .map((response: any) => response)
      .catch(this.handleError);
  }
  
  private handleError(error: Response | any) {
    console.error('officialsService::handleError', error);
    return Observable.throw(error);
  }
}
