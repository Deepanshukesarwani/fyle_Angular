// this.apiService.getUser(this.searchTerm +"/repos").subscribe((response: Repo[])=>{
    //  console.log(response);
    //  this.arrayOfRepo=response;
    // })





//     import { Component, OnInit } from '@angular/core';
// import { ApiService } from './services/api.service';
// import { ResponseService } from '../app/services/responce.service'; 

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
  
//   // imports:[FormsModule]
  
// })
// export class AppComponent implements OnInit{
//   res:any;
//   searchTerm: string = '';
//   isApicall:boolean=false;
//   arrayOfRepo:any[]=[];
//   constructor(
//     private apiService: ApiService,
//     private responseService: ResponseService 
//   ) {}

//   ngOnInit() {
    
//   }
//   handleSearch() {
//     console.log('Search term:', this.searchTerm);
//     // Add your search logic here...
//     this.apicall();
//     this.isApicall=true;
//   }
 
  
//   apicall()
//   {
//     this.apiService.getUser(this.searchTerm).subscribe(response => {
//       this.responseService.setResponseData(response);
//        this.res=this.responseService.getResponseData();  
//     }) 

//     interface Repo {
//       name: string;
//       description: string;
//     }
//     this.apiService.getUser(this.searchTerm + "/repos").subscribe(
//       (response: Repo[]) => {
//         console.log(response);
//         // Assign the response to arrayOfRepo
//         this.arrayOfRepo = response;
//       },
//       (error) => {
//         console.error("An error occurred:", error);
//       },
//       () => {
//         console.log("Request completed");
//       }
//     );
        
//   }
// }
