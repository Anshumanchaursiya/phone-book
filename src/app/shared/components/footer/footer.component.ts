import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="text-center">
  <hr>
    <p>
    <app-menu>
      <li class="nav-item " backToTop>  
        <a class="nav-link" href="#">Back to top</a>
    </li>
  </app-menu>
      Copyright 2020| @Anshuman Chaursiya
      
    </p>
  </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
