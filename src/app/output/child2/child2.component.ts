import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  //Example-1
  childData : string = "Sending data to parent from child"

  @Output() childDataTransfer = new EventEmitter<string>();

  onSubmit(){
    this.childDataTransfer.emit(this.childData)
  }

  //Example-2
  enteredText : string = '';

  @Output()
  inputValueTransfer = new EventEmitter<string>();

  onSendValues(){
    this.inputValueTransfer.emit(this.enteredText)
  }

  //Example-3
  name : string = "Veeresh"

  @Output() greetEvent = new EventEmitter();

  callParentGreet(){
    this.greetEvent.emit(this.name)
  }
}
