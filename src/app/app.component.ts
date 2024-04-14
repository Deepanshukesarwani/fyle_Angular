
// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './services/api.service';
// import { ResponseService } from '../app/services/responce.service';

// // Define interface for repository object


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   res: any;
//   searchTerm: string = 'johnpapa';
//   isApicall: boolean = false;
//   arrayOfRepo:any;
//   pages: number =10;
  
//   constructor(
//     private apiService: ApiService,
//     private responseService: ResponseService
//   ) {}

//   ngOnInit() {}

//   handleSearch() {
//     console.log('Search term:', this.searchTerm);
//     // Add your search logic here...
//     this.apicall();
//     this.isApicall = true;
//   }

//   apicall() {
//     this.apiService.getUser(this.searchTerm).subscribe((response) => {
//       this.responseService.setResponseData(response);
//       this.res = this.responseService.getResponseData();
//     });

//     this.apiService.getUser(this.searchTerm + '/repos').subscribe({
//       next: (response) => {
       
//         this.arrayOfRepo = response;
//         console.log(this.arrayOfRepo);
//         console.log(this.arrayOfRepo.length);
//       },
//       error: (error: any) => {
//         console.error('An error occurred:', error);
//       },
//       complete: () => {
//         console.log('Request completed');
//       },
//     });
//   }
  
// }


import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ResponseService } from '../app/services/responce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  res: any;
  searchTerm: string = 'johnpapa';
  isApicall: boolean = false;
  arrayOfRepo: any;
  pages: number = 10;
  currentPage: number = 1;
  totalPages: number[] = [];
  isloading:boolean=false;

  constructor(
    private apiService: ApiService,
    private responseService: ResponseService
  ) {}

  ngOnInit() {}

  handleSearch() {
    console.log('Search term:', this.searchTerm);
    // Add your search logic here...
    this.apicall();
    this.isApicall = true;
    this.isloading=true;
  }

  apicall() {
    this.apiService.getUser(this.searchTerm).subscribe((response) => {
      this.responseService.setResponseData(response);
      this.res = this.responseService.getResponseData();
    });

    this.apiService.getUser(this.searchTerm + '/repos').subscribe({
      next: (response) => {
        this.arrayOfRepo = response;
        console.log(this.arrayOfRepo);
        console.log(this.arrayOfRepo.length);
        this.calculateTotalPages();
      },
      error: (error: any) => {
        console.error('An error occurred:', error);
      },
      complete: () => {
        console.log('Request completed');
        this.isloading=false;
      },
    });
  }

  calculateTotalPages() {
    this.totalPages = Array.from({ length: Math.ceil(this.arrayOfRepo.length / this.pages) }, (_, i) => i + 1);
  }

  paginate(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}


