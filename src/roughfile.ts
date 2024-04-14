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


// interface Repository {
//     id: number;
//     node_id: string;
//     name: string;
//     full_name: string;
//     private: boolean;
//     owner: {
//       login: string;
//       id: number;
//       node_id: string;
//       avatar_url: string;
//     };
//     html_url: string;
//     description: string;
//     fork: boolean;
    
//   }








// <!-- <div>
// @for(r of repo ;track r.id){
// <h1> Project Name: {{r.name}}</h1>
// <p>description of repositary: {{r.description}}</p>
// }   
// </div> -->

// <!-- <label for="Pages"> <p>Enter the number of repo you want to see in one page</p>
// <input type="number" class="border-8" id="Pages"  [(ngModel)]="pages">
// </label>
// <div *ngFor="let r of arrayOfRepo" class="w-screen h-auto bg-lime-200 flex justify-center items-center">
 
//   <div class="w-1/2 h-40 bg-sky-600 flex-col justify-center items-center border">
//           <h1> Project Name: {{r.name}}</h1>
//           <br>
//           <p>description of repository: {{r.description}}</p>        
//   </div>
// </div> -->