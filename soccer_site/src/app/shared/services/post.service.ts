import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  collectionName = 'Posts'

  constructor(private afs:AngularFirestore) { }

  create(post:Post){
    post.id = this.afs.createId();
    return this.afs.collection<Post>(this.collectionName).doc(post.id).set(post);
  }

  getAll(){
    return this.afs.collection<Post>(this.collectionName, ref => ref.orderBy('post_date', 'desc')).valueChanges();
  }

  getLast(i:number){
    return this.afs.collection<Post>(this.collectionName, ref => ref.orderBy('post_date', 'desc').limit(i)).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Post>(this.collectionName).doc(id).valueChanges();
  }

  update(post: Post) {
    return this.afs.collection<Post>(this.collectionName).doc(post.id).set(post);
  }

  delete(id: string) {
    return this.afs.collection<Post>(this.collectionName).doc(id).delete();
  }
}
