import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dob: Date = new Date("1997-02-06");
  age: number = Math.floor((new Date().getTime() - this.dob.getTime()) / 1000 / 3600 / 24 / 365);

  constructor() { }

  ngOnInit(): void {
  }

}
