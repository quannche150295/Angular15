import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public counter = 0;
  public counterSquare = 0;
  constructor(private common:CommonService){}

  public games: string[] = [];
  public companies = [
    { brandName: 'Select a brand', games: []},
    {
      brandName: 'Sony',
      games: [
        'God of War',
        'Horizon',
        'Spider Man'
      ]
    },
    {
      brandName: 'FromSoftware',
      games: [
        'Elden Ring',
        'Sekiro',
        'Dark Soul'
      ]
    }
  ];

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterSquare = this.common.square(this.counter);
    this.common.counter++;
  }

  public changeBrand(event: any){
    const brand = event.target.value;
    if(!brand){
      return;
    }
    this.games = this.companies.find(data => data.brandName === brand)?.games || [];
  }

}
