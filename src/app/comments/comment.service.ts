import { Comment } from './comment.modelo';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

 private url: string = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) {
  }
  
  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url);
  }

}
