import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Jorder";
  userData = {
    email: "jorder@email.com",
    role: "User"
  }
  title = 'estudo-angular';
}
