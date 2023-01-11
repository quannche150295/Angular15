import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public counter = 0;
  public square(n: number): number{
    return n*n;
  }
  public submitData(data: string): void{
    console.log('Data: ', data);
  }
  constructor() { }
}
