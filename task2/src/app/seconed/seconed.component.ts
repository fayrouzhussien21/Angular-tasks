import { Component } from '@angular/core';

@Component({
  selector: 'app-seconed',
  templateUrl: './seconed.component.html',
  styleUrls: ['./seconed.component.css']
})
export class SeconedComponent {
   i=0;
   tid:any;
   srcimge=""
    arr=["./assets/images/hhh.jpg","./assets/images/hhh2.jpg","./assets/images/hhh3.jpg","./assets/images/hhh4.jpg"];
    constructor(){
      this.i=0;
      this.tid=0;
      this.srcimge=this.arr[0];
    }
   next()
  {
  this.srcimge=this.arr[++this.i%4];
  }
   stop()
  {
    clearInterval(this.tid);
    this.tid=0;
  }

   previous()
  {
   this.i=(--this.i+4)%4;
   this.srcimge=this.arr[this.i];
  }
  show(){
    if(!this.tid){
    this.tid=setInterval(()=>{
      
        this.srcimge=this.arr[++this.i%4];
      
    },1000)
} }
}
