import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //step 1:
  private accountName = 'Anshuman';

  // Step 2: create behaniourSubject with default value
  // for subscribing first
  private myAccount = new BehaviorSubject<any>(this.accountName);

  //step3: Create observable for the BehaviourSubject...
  // so any component can subscribe to it.
  latestAccountName: Observable<any> = this.myAccount.asObservable();
  //latestAccountName is subscribable

  constructor() { 

  }

  updateAccountName(newName){
    console.log(newName);
    
    //updating the name with newName
    this.myAccount.next(newName);
  }
}
