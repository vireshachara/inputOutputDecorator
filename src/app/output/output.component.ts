import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {


  recivedData : string = "";

  inputValues: string = '';

  recievedData(event : string){
    this.recivedData = event
  }

  inputValueRecived(event : any){
    this.inputValues = event;
  }

  greet(name : string){
    alert("Hello " + name)
  }
}
