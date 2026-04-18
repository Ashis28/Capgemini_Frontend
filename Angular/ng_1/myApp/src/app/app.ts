import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,              // ✅ REQUIRED
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'myApp';

  users = [
    {name:'avi',address:'haryana',age:22,gender:'female'},
    {name:'shubhi',address:'delhi',age:23,gender:'male'},
    {name:'palak',address:'chd',age:24,gender:'female'}
  ];

  changeTitle() {
    this.title = "Title Changed";
  }
}