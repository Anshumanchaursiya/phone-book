import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  //step 1: Have the form tag equivalent in TS
  contactForm: FormGroup;
  isSaved : boolean;
   
  constructor(private contactService: ContactService) { //dependecy injection

   }

  ngOnInit(): void {
    //stap 2: contineu with FormGroup object
    this.contactForm = new FormGroup({
      //step 2: have form field equivalent in TS
      name: new FormControl('anshuman',Validators.required), //step 5: work with validators
      phone: new FormControl('8299',[Validators.required,Validators.maxLength(10)]), //Refer TS for step 6 // todo : max length 10
      email: new FormControl('ansh@lnt',[Validators.required, Validators.email]),
    }); //Refer HTML for step 3.
  }

  addContactHandler(): void{
    //you can find the entire formGroup object insice incl dirty, touchec, pristine
    console.log(this.contactForm.value);

    //1: connect to service --- refer constructor -- dep injection is connecting the service class.
    //2: send the above data to service
    this.contactService.createContact(this.contactForm.value)
    .subscribe((res: Contact)  =>{ //3: get the responce from service
         //4: show the updates in html
        console.log(res);
        if(res && res.id){
          this.isSaved = true;
        }
      });

  }

}
