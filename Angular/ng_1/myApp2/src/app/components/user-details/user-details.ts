import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})

export class UserDetails {

  @Input() name = "Default";
  @Input() age = 0;
  @Input() address = "Default Address";
  @Input() gender = "NA";
  @Input() count = 0;
  @Output() onUpdate = new EventEmitter<any>();
  toggle = false;

  informParent(){
    console.log("user Details invoked");
    this.onUpdate.emit({
      name : this.name,
      age : this.age,
      address : this.address,
      gender : this.gender})
  }
  edit(){
    this.toggle = !this.toggle;
  }
}
