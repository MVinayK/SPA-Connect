import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network, Post } from '../components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(network : Network) {
    console.log("yeah i am called !!!")
    return this.http.get<Post>("http://localhost:8081/api/posts/" + network.id);
  }

}
