import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  //step 1: create custom event -- create an object for EventEmitter();
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>(); //step 2: @putput will make profile 


  constructor() { 
    console.log('inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // ideal place for ajax call
    //step4: sending 'Anshuman to parent 
  }

  sendDataHandler(): void{
    //step 3: Emit the custom event.
    this.profileLoaded.emit('Anshuman');//step4: sending 'Anshuman' to parent 
  }

}
