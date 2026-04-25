import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {

  fruits : string[] = [];
  fruit: string = "";
  addFruit(fruit: string){
    this.fruits.push(fruit);
  }

  getFruits(): string[]{
    // Observable<string[]>
    // return this.httpClient.get("http://localhost:3434/fruits")
    return this.fruits;
  }
  
  setFruits(fruits: string[]){
    this.fruits = [...fruits];
  }
}
