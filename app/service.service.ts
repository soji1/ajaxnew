import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import{student} from './student';
import { Observable, throwError } from 'rxjs';
import{map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
student: student[];
  constructor(private http: HttpClient) { }
  store(student: student): Observable<student[]> {
    return this.http.post(`http://localhost/reg.php`,{ data : student}).pipe(map((res) => {
      this.student=(res['data']);
      return this.student;
    }),
    catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError('Error! something wrong');
  };
  
}
