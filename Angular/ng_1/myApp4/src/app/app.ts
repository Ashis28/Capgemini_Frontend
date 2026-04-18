import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp4');
  startIndex = 0;
  
  laptops =  [
    { "id": 1, "brand": "Apple", "model": "MacBook Pro", "price": 1999 },
    { "id": 2, "brand": "Dell", "model": "XPS 15", "price": 1799 },
    { "id": 3, "brand": "Lenovo", "model": "ThinkPad X1", "price": 1599 },
    { "id": 1, "brand": "Apple", "model": "MacBook mini", "price": 1999 },
    { "id": 2, "brand": "Dell", "model": "Dell Inspiron", "price": 1799 },
    { "id": 3, "brand": "Lenovo", "model": "Ideapad Gaming", "price": 1599 },
    { "id": 1, "brand": "Apple", "model": "MacBook Pro", "price": 1999 },
    { "id": 2, "brand": "Dell", "model": "XPS 15", "price": 1799 },
    { "id": 3, "brand": "Lenovo", "model": "ThinkPad X1", "price": 1599 }
  ]
  endIndex = this.laptops.length;

  increment(){
    if(this.startIndex+2 < this.endIndex)
    {
      this.startIndex = this.startIndex + 2;
    }
  }
  decrement(){
     if(this.startIndex - 2 >  -1 ){
      this.startIndex = this.startIndex -2;
     }
  }
}
