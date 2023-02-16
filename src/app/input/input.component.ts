import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

  //Example-1
  employeeName: string = 'Vireshachara';

  //Example-2
  enteredValue : string = '';
  parentValueSending : string = '';

  onSubmitValue(){
    this.parentValueSending = this.enteredValue;
  }

  //Example-3
  empDetails = [
    { name: 'Veeresh', age: 29, place: 'Singapur' },
    { name: 'Janardhan', age: 26, place: 'Bangalore' },
    { name: 'Srikanth', age: 32, place: 'Mysore' },
  ];
 
}

