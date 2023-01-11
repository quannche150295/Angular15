import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  public counter = 0;
  public counterSquare = 0;

  constructor(private common: CommonService){

  }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterSquare = this.common.square(this.counter);
    this.common.counter++;
  }
}
