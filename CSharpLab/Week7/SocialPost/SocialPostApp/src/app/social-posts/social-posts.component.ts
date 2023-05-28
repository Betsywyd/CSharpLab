import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {

posts:Post[]=[{title:"good day",thought:"sunshine and lake and blue sky,It's a wonderfull day",beShow:true},
{title:"school day",thought:"It's a busy school day!",beShow:true}]

newPost:Post={title:"",thought:"",beShow:true}
showAll:boolean=true;

deletePost(index:number){
  this.posts.splice(index, 1);
}

showSingle(index:number):void{
  for(let i=0;i<this.posts.length;i++){
    this.posts[i].beShow=false;
  }
  this.showAll=false;
  this.posts[index].beShow=true;
}

showList():void {
  for(let i=0;i<this.posts.length;i++){
    this.posts[i].beShow=false;
  }
  this.showAll=true;
}

addNewPost(p:Post):void{
  this.posts.unshift(p);
}

deleteSingle:Post={title:"",thought:"",beShow:true};

deleteSinglePost(deleteSingle:Post,index:number){
  this.posts[index]=deleteSingle;
   this.posts.slice(index,1);
   for(let i=0;i<this.posts.length;i++){
    this.posts[i].beShow=false;
  }
  this.showAll=true;
}

}
