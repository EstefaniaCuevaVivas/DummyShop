import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  public user: User
  public isLoggedIn: boolean

  constructor(private http: HttpClient) {
    this.isLoggedIn = false
  }


  login(user: User) {

    return this.http.post('https://dummyjson.com/auth/login', user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // If an error occurs in the HTTP request
          if (error.status === 400 && error.error && error.error.message === 'Invalid credentials') {
            console.log("usuario no autorizado");

          } else {
            // Handle other HTTP errors here
            console.error('Error en la solicitud:', error.message);
          }
          // send the error to the component calling the service
          return throwError(error);
        })
      );
  }


  logout(): void {
    this.user = null;
    this.isLoggedIn = false   //This attribute is used to indicate that the user is no longer logged in to control whether or not the header is displayed.
  }

}

