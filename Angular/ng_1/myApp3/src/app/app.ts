import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './components/my-component/my-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('myApp3');
  laptops =  [
    { "id": 1, "brand": "Apple", "model": "MacBook Pro", "price": 1999 },
    { "id": 2, "brand": "Dell", "model": "XPS 15", "price": 1799 },
    { "id": 3, "brand": "Lenovo", "model": "ThinkPad X1", "price": 1599 }
  ]

  // "obj1" : {
  //   id:1,
  //   name : "Ashis"
  // }
  obj1: { name: string; id: number } = {
  name: "Asheee",
  id: 21,
};

  handleUpdate(updateId:any){
    this.obj1.id = updateId;
  }
}

