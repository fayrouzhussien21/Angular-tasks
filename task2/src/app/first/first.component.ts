import { Component } from '@angular/core';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  display:any="";
  bol=false;
  check()
  {
    if(this.display=="")this.bol=false;
    else this.bol=true;
  }
  reset()
  {
    this.display="";
    this.bol=false;
  }
  
}
