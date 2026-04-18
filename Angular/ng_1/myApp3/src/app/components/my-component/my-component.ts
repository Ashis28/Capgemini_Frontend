import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-component',
  imports: [],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})


export class MyComponent {
//   @Input() laptops_ = [
//     { "id": 1, "brand": "Apple", "model": "MacBook Pro", "price": 1999 },
// ];
 @Input() laptops_: any[] = [];
//  @Input() objct1: { id: number; name: string } = {
//   id: 0,
//   name: "Ahis"
// };
@Input() objct1! : { id : number; name : string};
@Output() obj1Change = new EventEmitter<any>();
ngOnInit(){
  this.objct1 = {...this.objct1};
}
updateId(newId: number) {
  this.objct1.id = newId;
    this.obj1Change.emit(this.objct1.id);
  }
}
