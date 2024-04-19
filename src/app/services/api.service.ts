import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
// import { ApiService } from '../services/';
import { ResponseService } from '../services/responce.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    // private apiService: ApiService,
    private responseService: ResponseService
    
  ) { }

  res: any;
  searchTerm: string = 'johnpapa';
  isApicall: boolean = false;
  arrayOfRepo: any;
  pages: number = 10;
  currentPage: number = 1;
  totalPages: number[] = [];
  isloading:boolean=false;
  IsSearched:boolean=false;

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
  // getRepo()
  // {
  //   this.getUser(this.searchTerm +"/repos").subscribe((response) => {
  //       this.responseService.setResponseData(response);
  //       this.res = this.responseService.getResponseData();
  //   })
  // }
}

  // clickHandler()
  // {
  //   this.apicall();
  //   this.isApicall = true;
  //   this.isloading=true;
  //   console.log("clicked");
  // }

  // apicall() {
  //   this.getUser(this.searchTerm).subscribe((response) => {
  //     this.responseService.setResponseData(response);
  //     this.res = this.responseService.getResponseData();
  //   });

  //   this.getUser(this.searchTerm + '/repos').subscribe({
  //     next: (response) => {
  //       this.arrayOfRepo = response;
  //       this.calculateTotalPages();
  //     },
  //     error: (error: any) => {
  //       console.error('An error occurred:', error);
  //     },
  //     complete: () => {
  //       console.log('Request completed');
  //       this.isloading=false;
  //     },
  //   });
  // }

  // calculateTotalPages() {
  //   this.totalPages = Array.from({ length: Math.ceil(this.arrayOfRepo.length / this.pages) }, (_, i) => i + 1);
  // }

  // paginate(pageNumber: number) {
  //   this.currentPage = pageNumber;
  // }
  


// implement getRepos method by referring to the documentation. Add proper types for the return type and params 