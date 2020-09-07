import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  accountName: any;
  duplicateAccountName: any;

  today: Date = new Date();
  randomText = 'Loren ipsum dolor, sit amet';

  constructor(private accountDataService: AccountService) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe( (name: any) =>{
      console.log(name);
      this.accountName = name;
      this.duplicateAccountName = name;
    });
  }

  updateAccountHandler(): void{
    console.log(this.duplicateAccountName);
    this.accountDataService.updateAccountName(this.duplicateAccountName);
  }

}
