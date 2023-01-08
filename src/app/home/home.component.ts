import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  public age = 88;
  public fruits = ['apple','orange','grapes'];
  public objectFruits = [{name: 'apple', price: 5},{name: 'orange', price: 10},{name: 'grapes', price: 8}];

  ngOnInit(): void {
     console.log(this.fruits)
  }

}
