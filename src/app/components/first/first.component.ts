import { Component,OnInit } from '@angular/core';
import { ResponseService } from "../../services/responce.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  responseData: any;

  constructor(private responseService: ResponseService) {}

  ngOnInit() {
    this.responseData = this.responseService.getResponseData(); 
    console.log(this.responseData);// Get response from service
  }
}
