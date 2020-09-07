import { Component } from '@angular/core';
// Decorator
@Component({
  selector: 'app-root', //exposed in selector -- element selector -- mandatory
  templateUrl: './app.component.html', //html -- mandatory -- only one
  styleUrls: ['./app.component.css'] //css not mandatory or can be multiple
})
export class AppComponent {
  //ts
  title = 'phone-book';
}
