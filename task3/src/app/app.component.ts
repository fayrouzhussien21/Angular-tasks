import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my-dream-app';
  displayinput=""
  oddNumber:number;
  evenNumber:number;
  onintervalFired(num)
  {
    if(num%2!=0)
    {this.oddNumber=num;
  }
  else{
    this.evenNumber=num;
  }

  }
}
