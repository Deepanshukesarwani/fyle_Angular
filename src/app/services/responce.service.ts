import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  // private responseData: any;
  private responseData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private responseDataRepo: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  setResponseData(data: any,username:string) {
    const responseData={data:data,username:username};
    this.responseData.next(responseData);
  }
  
  getResponseData() {
    return this.responseData.asObservable();
  }
}
