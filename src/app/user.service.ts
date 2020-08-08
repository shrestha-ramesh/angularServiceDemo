import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users: any[]=[
    {id: 101, name: 'Ramesh', city: 'USA', salary: 5000},
    {id: 102, name: 'Suraj', city: 'Nepal', salary: 10000},
    {id: 103, name: 'Kishow', city: 'India', salary: 12000},
    {id: 104, name: 'Santosh', city: 'China', salary: 15000}
  ];
}
