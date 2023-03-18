import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task4';
  Students:any[]=[];
  getdata(data:any)
  {
    this.Students.push(data);
    console.log(this.Students);
  }
}
