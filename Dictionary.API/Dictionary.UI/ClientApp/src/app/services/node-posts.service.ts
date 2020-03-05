import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { NodePosts } from '../models/node-posts';

@Injectable({
  providedIn: 'root'
})
export class NodePostsService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http : HttpClient) {
    this.myAppUrl = environment.myAppUrl;
    this.myApiUrl = 'api/Product';
   }
   getAllPosts(): Observable<NodePosts> {
    
    return this.http.get<NodePosts>(`${this.myAppUrl + this.myApiUrl}/posts`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
      
  }

  getPost(postId: number): Observable<NodePosts> {
    return this.http.get<NodePosts>(this.myAppUrl + this.myApiUrl + postId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  savePost(titlepost: NodePosts) {
    return this.http.post(`${this.myAppUrl + this.myApiUrl}/createnewpost`, titlepost)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updatePost(titlepost: NodePosts): Observable<NodePosts> {
    return this.http.put<NodePosts>(`${this.myAppUrl + this.myApiUrl}/updatepost`, titlepost)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteCurrentPost(titlepost: NodePosts): Observable<boolean> {
    return this.http.post<boolean>(`${this.myAppUrl + this.myApiUrl}/deletepost`, titlepost)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = error.error.message;
    } else {
     
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
