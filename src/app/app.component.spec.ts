import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[provideRouter([])]
    }).compileComponents();
  });
  it('From App component', ()=>{
    console.log("just check");
    
  })
});
