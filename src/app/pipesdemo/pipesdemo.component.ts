import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css']
})
export class PipesdemoComponent implements OnInit {

  title="Pipes Demo";
  todayDate = new Date();

  jsonVal = {name: 'Ramesh', age: '30', address: 'Sheridan'};
  months = ['January', 'February', 'March', 'April', 'May', 'Jun','July', 'August','Sep','Oct','Nov','Dec']
  constructor() { }

  ngOnInit(): void {
  }

}
