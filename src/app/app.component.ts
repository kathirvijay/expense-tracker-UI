import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { BehaviorSubject, catchError, combineLatest, concat, delay, delayWhen, filter, from, interval, map, merge, Observable, of, retry, retryWhen, scan, Subject, take, takeUntil, throwError, timer } from 'rxjs';
import { AuthService } from './_service&interceptors/auth.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cost';
  isLogin: boolean = false
  private isSignup$ = new BehaviorSubject<boolean>(false)
  isSignup = this.isSignup$.asObservable()
  subject = new Subject<number>();
  behaviorSubject = new BehaviorSubject<number>(0); // starts with 0
  isAuthenticated$: Observable<boolean>


  onInit() {

  }

  constructor( 
    private router: Router,
    private store: AuthService
  ) {




    this.isAuthenticated$= this.store.isAuthenticated$
    console.log('this.isAuthenticated$', this.isAuthenticated$);
    
// console.log('isSignup$', this.isSignup$.asObservable());
    // this.subjectFun()
    // this.behaviourSubject()
    this.observable()
    this.networkCheck()
      // // Create an Observable
      // const myObservable = new Observable(observer => {
      //   observer.next('Hello');      // Emit value
      //   observer.next('World');      // Emit another value
      //   observer.complete();         // Signal completion
      // });
      // const observer = {
      //   next: (value) => console.log('Got value:', value),
      //   error: (err) => console.log('Got error:', err),
      //   complete: () => console.log('Stream finished')
      // };
      // // myObservable.next('check');
      // myObservable.subscribe(observer).unsubscribe();
      
      // // Subscribe to it
      // myObservable.subscribe(value => {
      //   console.log(value); // Prints: Hello, then World
      // });
      // myObservable.subscribe(value => {
      //   console.log(value); // Prints: Hello, then World
      // });
  }
  
  
  login() {
    this.router.navigate(['/auth/login'])
    this.isLogin = true
  }

  signup() {

    this.router.navigate(['/auth/signup'])
    this.isLogin = false
  }

  logout() {
    this.store.logout()
    this.router.navigate(['/'])
  }


  subjectFun() {

    const a = this.subject.subscribe(val => console.log('A:', val)); // Sub A
    this.subject.next(1);
    this.subject.next(2); 
    this.subject.next(3); 
    
    const b = this.subject.subscribe(val => console.log('B:', val)); // Sub B joins
    a.unsubscribe()
    this.subject.next(4); 
    this.subject.next(5); 
  }

  behaviourSubject() {
    console.log("___________________________________________________");
    
    const x = this.behaviorSubject.subscribe(val => console.log('x:', val));
    this.behaviorSubject.next(1);
    x.unsubscribe()
    const y = this.behaviorSubject.subscribe(val => console.log('y:', val));
    this.behaviorSubject.next(2);
    const z = this.behaviorSubject.subscribe(val => console.log('z:', val));
  }

  promises(success: boolean = true): Promise<number[]> {
      return new Promise((res, reject)=>{
        setTimeout(()=>{
          if(success){
            res([3, 6, 6,6,8,56])
          } else{
             reject(new Error("Network failed!!!"))  
          }
        }, 3000)
      })

  }

  observable() {
    const obs= of(2, 4, 7)

    // obs.subscribe({
    //     next:  val=> console.log("val", val),
    //     error(err) {
    //         console.log("error", err);    
    //     },
    //     complete() {
    //         console.log("completed");        
    //     }
    //  })

     const obs2 = from([3, 6, 7,8])

    //  obs2.subscribe(val => console.log("check", val))
    // obs2.pipe(map(x=> x*2)).subscribe(e=> console.log("e", e)


     const obs3 = from(this.promises(false))

     obs3.pipe(
      retry(3),
      // catchError((err)=> of([3, 6, 9, 12]))
     ).
     subscribe(val => {
        from(val).pipe(
           filter(v =>  v > 7),
           map(v => v *2)
        ).subscribe({
          next: val => console.log(val),
          error: err => console.error("err", err),
          complete: () => console.log("Process completed !!!")
          
        })
    })




    

    //  const intervalObservable = interval(1000)
    //  const obs_4= intervalObservable.subscribe(val => console.log('intervalObservable', val))
    //  setTimeout(()=>{
    //   obs_4.unsubscribe()
    //   console.log("unsubscribed interval");
    //  }, 7000)

    //  interval(2000).pipe(take(5)).subscribe(c=> console.log("c", c))

    //  merge(of(1, 2,3).pipe(delay(7000)), of('a', 'b', 'c')).subscribe(e=> console.log('e1', e))
    //  concat(of(1, 2,3).pipe(delay(7000)), of('a', 'b', 'c')).subscribe(e=> console.log('e2', e))


//      combineLatest([interval(1000), interval(2000)])
// .subscribe(([a,b]) => console.log(`A:${a}, B:${b}`));
// const error$ = throwError(()=> new Error("check for error !!!"))

// error$.subscribe({
//   next: val => console.log("val", val),
//   error: err => console.error(err)
// })

  // throwError(() => new Error("data mismatch")).pipe(
  //     catchError(err=>{
  //       console.error("Error caught", err)
  //       return of("RE-correction")
  //     })
  // ).subscribe(val=> console.log("errr", val))


  }

    server(status: boolean = false): Promise<string>{
      return new Promise((resolve, reject)=>{
        if(status) {
          resolve('192.163.132.41')
        } else {
          throw reject( new Error('Server Occoupied !!!'))
        }
      })
    }

    networkCheck() {
      const obs$ = from(this.server())

      obs$.pipe(
        retryWhen(err=>{
          return err.pipe(
            scan((count, err) => {
              console.log(`Retry attempt: ${count + 1}`);
              if (count >= 5) { // After 3 attempts total (0,1,2)
                throw err; // Stop retrying
              }
              return count + 1;
            }, 0),
            delayWhen(() => timer(5000))
          )
        }),
        catchError(err => of('192.168.0.123'))
      ).subscribe({
        next: val => console.log("IP Address is ", val),
        error: err=> console.error("Error :", err),
        complete: () => console.log("Process Completed !!!")       
      })
      



    }


// import { BehaviorSubject } from 'rxjs';




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
