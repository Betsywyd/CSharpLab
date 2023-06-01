import { Component } from '@angular/core';
import { RedditService } from './Services/reddit.service';
import { Child } from './Models/RedditPost';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedditApp';
  posts:Child[]=[];
  permalink:string[]=[];
 

  constructor(private redditPosts:RedditService){
    this.redditPosts.getPosts().subscribe(
      (result)=>{
        this.posts = result.data.children;
       
      }
    )
    
  }

 
}

