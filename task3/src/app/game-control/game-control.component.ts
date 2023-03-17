import { Component, Output ,EventEmitter} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  Number: number=0;
  @Output() intervalFired=new EventEmitter<number>();
  interval:any;
count(){
  this.interval=setInterval(()=>{
    this.intervalFired.emit(this.Number+1);
    this.Number+=1;
  },1000);
  }

  clear()
  {
    clearInterval(this.interval);
  }
}
