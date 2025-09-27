import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathserviceService {

  constructor() {
    console.log("Math Service");
    
   }

   add(a, b) {
      return a+b ;
   }

    sub(a, b) {
      return a-b ;
   }

    multiply(a, b) {
      return a*b ;
   }

    divide(a, b) {
      if(b === 0){ 
        throw new Error( "Cannot divide by 0")
      }
      return a/b ;
   }
}
