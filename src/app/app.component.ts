import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cost';
  isLogin: boolean = false
  constructor( private router: Router) {

  }
  login() {
    this.router.navigate(['/auth/login'])
    this.isLogin = true
  }

  signup() {

    this.router.navigate(['/auth/signup'])
    this.isLogin = false
  }

//   import { Subject } from 'rxjs';

// const subject = new Subject<number>();

// subject.subscribe(val => console.log('A:', val)); // Sub A
// subject.next(1); // A: 1

// subject.subscribe(val => console.log('B:', val)); // Sub B joins
// subject.next(2); 
// // A: 2
// // B: 2


// import { BehaviorSubject } from 'rxjs';

// const behaviorSubject = new BehaviorSubject<number>(0); // starts with 0

// behaviorSubject.subscribe(val => console.log('A:', val)); // A: 0
// behaviorSubject.next(1); // A: 1

// behaviorSubject.subscribe(val => console.log('B:', val)); // B: 1
// behaviorSubject.next(2); 
// // A: 2
// // B: 2


// import { Observable } from 'rxjs';

// const observable = new Observable((observer) => {
//   observer.next('Hello');
//   observer.next('World');
//   observer.complete();
// });



// observable.subscribe({
//   next: val => console.log('Received:', val),
//   error: err => console.error('Error:', err),
//   complete: () => console.log('Done!')
// });




}
