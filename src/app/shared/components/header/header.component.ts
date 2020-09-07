import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    //ts
    //you can subscribe from account data service

    //step 4 of any to comp commn -- prev step is in account data service
    accountName: any;
  constructor(private accountDataService: AccountService ) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe( (name: any) =>{
      console.log(name);
      this.accountName = name;
      
    });

  
  }

}
