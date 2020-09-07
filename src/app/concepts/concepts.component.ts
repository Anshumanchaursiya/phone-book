import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .greenText{
      color:green;
    }
    `
  ]
})

export class ConceptsComponent implements OnInit {

  //string interpolation related
  appName =  'Phone Book App';
  exp = 20; // todo : work with booolean,array,obj;
  companyName = 'L & T construction';
  isLoggenIn = true;

  // two way binding related
  courseName = 'Angular';

  //custom event related
  profileName: any;
  
  //*ngFor related
  skillsList: string[] = ['html','css','js'];
  
  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number {
    return this.exp;
  }

  isAuth(): boolean{
    return !this.isLoggenIn;
  }

  //event binding related
  clickHandler(evt) :void{
    console.log(evt);
    alert('clicked');
  }

  //step 6
  profileLoadedHandler(evt): void{
    console.log(evt);
    this.profileName = evt;
  }

}
