// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './services/api.service';
// import { ResponseService } from '../app/services/responce.service';

// // Define interface for repository object
// interface Repository {
//   id: number;
//   node_id: string;
//   name: string;
//   full_name: string;
//   private: boolean;
//   owner: {
//     login: string;
//     id: number;
//     node_id: string;
//     avatar_url: string;
//     // Add other properties as needed
//   };
//   html_url: string;
//   description: string;
//   fork: boolean;
//   // Add other properties as needed
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   res: any;
//   searchTerm: string = '';
//   isApicall: boolean = false;
//   arrayOfRepo: Repository[] = [];

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
//       next: (response: Repository[]) => {
//         console.log(response);
//         // Assign the response to arrayOfRepo
//         this.arrayOfRepo = response;
//       },
//       error: (error) => {
//         console.error('An error occurred:', error);
//       },
//       complete: () => {
//         console.log('Request completed');
//       },
//     });
//   }
// }


// 

import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { ResponseService } from '../app/services/responce.service';

// Define interface for repository object
interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    // Add other properties as needed
  };
  html_url: string;
  description: string;
  fork: boolean;
  // Add other properties as needed
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  res: any;
  searchTerm: string = '';
  isApicall: boolean = false;
  arrayOfRepo:any;

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
      },
      error: (error: any) => {
        console.error('An error occurred:', error);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
  method()
  {
   
  }
}


