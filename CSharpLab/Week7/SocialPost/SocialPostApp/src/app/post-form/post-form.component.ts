import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  newPost:Post={title:"",thought:"",beShow:true};
  @Output() changed=new EventEmitter<Post>();

  display:boolean=false;


  toggleDisplay():void{
  this.display=true;
  }

  submitPost(){
    this.changed.emit(this.newPost);
    this.newPost={title:"",thought:"",beShow:true};
    this.display=false;
  }
}
