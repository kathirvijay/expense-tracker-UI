import { TestBed } from '@angular/core/testing';

import { MathserviceService } from './mathservice.service';

fdescribe('MathserviceService', () => {
  let service: MathserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathserviceService);
  });

  afterEach(()=>{
    console.log("next");
    
  })
  
  beforeAll(()=>{
    console.log("-------------------START------------------------");
  })
  
  afterAll(()=>{
    console.log("-------------------END----------------------------");
    
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add test',() =>{
    const result = service.add(10,21);
    expect(result).toEqual(31)
  })

  it('sub test',()=>{
    const result = service.sub(20,10)
    expect(result).toEqual(10)
  })

  it('mul test',()=>{
    const result = service.multiply(20,10)
    expect(result).toEqual(200)
  })

  it('divide test',()=>{
    const result = service.divide(20,10)
    expect(result).toEqual(2)
  })

  it('throw error',()=>{
    expect(()=> service.divide(100,0)).toThrowError("Cannot divide by 0")
  })
});
