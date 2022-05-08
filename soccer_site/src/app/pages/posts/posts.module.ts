import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsRoutingModule} from "./posts-routing.module";
import {PostsComponent} from "./posts.component";
import {DateformatPipe} from "../../shared/pipes/dateformat.pipe";
import { MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    PostsComponent,
    DateformatPipe,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatDividerModule
  ]
})
export class PostsModule { }
