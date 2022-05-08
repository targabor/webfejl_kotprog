import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/models/post";
import {PostService} from "../../shared/services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Array<Post> = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    });
  }

  ngOnChanges(): void {
    this.postService.getAll().subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    });
  }

}
