import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './customer';
import { patternError } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('customerList');

  customers: Customer[] = [
    { id: 1, name: 'Ashis', address: 'Delhi', email: 'a@mail.com', phone: '111', dateOfBirth: new Date(), gender: 'M' },
    { id: 2, name: 'Babal', address: 'Delhi', email: 'b@mail.com', phone: '222', dateOfBirth: new Date(), gender: 'F' },
    { id: 3, name: 'Babal', address: 'Delhi', email: 'c@mail.com', phone: '333', dateOfBirth: new Date(), gender: 'M' },
    { id: 4, name: 'Deepak', address: 'Delhi', email: 'd@mail.com', phone: '444', dateOfBirth: new Date(), gender: 'F' },
    { id: 5, name: 'Dikshya', address: 'Delhi', email: 'e@mail.com', phone: '555', dateOfBirth: new Date(), gender: 'M' },
    { id: 6, name: 'Farhan', address: 'Delhi', email: 'f@mail.com', phone: '666', dateOfBirth: new Date(), gender: 'F' },
    { id: 7, name: 'Abhijit', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' },
    { id: 17, name: 'Abhisek', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' },
    { id: 8, name: 'Goutam', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' },
    { id: 9, name: 'Gouda', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' },
    { id: 10, name: 'Amaar', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' },
    { id: 11, name: 'Hanshika', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' },
    { id: 12, name: 'ABCO', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' },
    { id: 13, name: 'BDEO', address: 'Delhi', email: 'g@mail.com', phone: '777', dateOfBirth: new Date(), gender: 'M' }

  ];
  
  
  itemsPerPage = 6;
  currentPage = 0;
  pageEnd = this.itemsPerPage;
  customersTemp = this.customers.slice(0,this.itemsPerPage);

  searchText: string = '';
  get filteredCustomers() {
  return this.customers.filter(c =>
    c.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
  
  get pagignation() {
    const start = this.currentPage;
    return this.filteredCustomers.slice(start, start + this.itemsPerPage);
  }
  prevPagePagignation(){
    this.currentPage -= this.itemsPerPage;
    if(this.currentPage<=0){
      this.currentPage = 0;
    }
  }
  nextPagePagignation(){
    if(this.currentPage+this.itemsPerPage < this.filteredCustomers.length){
      this.currentPage += this.itemsPerPage;
    }
    console.log(this.currentPage);
  }
  

// prevPage() {
//   this.currentPage -= this.itemsPerPage;
//   this.pageEnd -= this.itemsPerPage;
//   if(this.currentPage<0){
//     this.currentPage = 0;
//     this.pageEnd = this.itemsPerPage;
//   }
//   this.customersTemp = this.customers.slice(this.currentPage, this.pageEnd);
// }

// nextPage() {
//   if (this.currentPage+this.itemsPerPage < this.customers.length) {
//     this.currentPage = this.pageEnd;
//     this.pageEnd += this.itemsPerPage;
//   }
//   else{
//     this.pageEnd = this.filteredCustomers.length;
//     this.currentPage = this.pageEnd-this.itemsPerPage;
//   }
//    this.customersTemp = this.customers.slice(this.currentPage, this.pageEnd);
// }
  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    // return this.pageEnd >= this.filteredCustomers.length;
    return this.currentPage+this.itemsPerPage>=this.filteredCustomers.length;
  }
  onSearchChange() {
    this.currentPage = 0;
  }
}
