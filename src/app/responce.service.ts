// response.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private responseData: any;

  constructor() {}

  setResponseData(data: any) {
    this.responseData = data;
  }

  getResponseData() {
    return this.responseData;
  }
}
