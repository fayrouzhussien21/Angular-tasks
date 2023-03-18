import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent {
  name:string="";
  age:number=0;
  c=true;

 @Output() displayStudents=new EventEmitter();
  check()
  {
    let data={name:this.name,age:this.age}
this.displayStudents.emit(data);
  }
}
