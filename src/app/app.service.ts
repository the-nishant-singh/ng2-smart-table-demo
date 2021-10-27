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

const API_URL = 'https://jsonplaceholder.typicode.com'


@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
  public getUsers(): Observable<any>{
    return this.http
      .get(`${API_URL}/users`)
      .map((response: any) => response)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('officialsService::handleError', error);
    return Observable.throw(error);
  }
}
