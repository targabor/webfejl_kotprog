import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared/models/post";
import {PostService} from "../../shared/services/post.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts: Array<Post> = [];

  constructor(private postService:PostService ) { }

  ngOnInit(): void {
    this.postService.getLast(1).subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    });
  }

  ngOnChanges(): void {
    this.postService.getLast(1).subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    });
  }

  }
