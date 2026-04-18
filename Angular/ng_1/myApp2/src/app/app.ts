import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from "./components/user-details/user-details";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp2');

  name = "Ashis";
  count = 0;

  changeName(){
    this.name = "Ashis's name changed";
  }
  incrementCount(){
    console.log("count invoked ",this.count);
    this.count = this.count+1;
  }
   users = [
    {name:'avi',address:'haryana',age:22,gender:'female'},
    {name:'shubhi',address:'delhi',age:23,gender:'male'},
    {name:'palak',address:'chd',age:24,gender:'female'}
  ];

  parentAction(data : any){
    console.log("this aint gettin invoked",data);
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].name === data.name){
        this.users.splice(i,1);
        break;
      }
    }
  }
}
