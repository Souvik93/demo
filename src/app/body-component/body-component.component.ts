import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {

public dob: string;
public age:any;

  constructor() {
 }

    ngOnInit() {
  }

    calculateAge()
  {

    let diffInMs: number = Date.now() - Date.parse(this.dob);
  this.age=Math.floor((diffInMs / (1000 * 3600 * 24))/365);
  }

}
