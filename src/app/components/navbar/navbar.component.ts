import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ResponseService } from '../../services/responce.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() searchedStatusChange = new EventEmitter<boolean>();
  constructor(
    private apiService: ApiService,
    private responseService: ResponseService
  ) {}
  search:string="";
  username:string="";
  userImg:string="";
  // IsSearched:boolean=false;
  getdataRes:any;
  localResOfNav:any;
  isloadingDone:boolean=false;
  
  
  // clickHandler async()
  // {
  //   this.apiService.getUser(this.search).subscribe((res)=>{ 
  //     this.responseService.setResponseData(res,this.search);
  //     // console.log(this.userRes);
  //   });

  //    this.getdataRes await=this.responseService.getResponseData().subscribe(res=>{
  //     if(res)
  //     {
  //       this.localResOfNav=res.data;
  //       // this.username=res.data;
  //       console.log(this.localResOfNav);
  //     }
  //   })

  //   this.userImg=this.localResOfNav.avatar_url;
  //   this.username=this.localResOfNav.login;
  //   this.isloadingDone=true;
  //   console.log("jnbj")
  // } 

  clickHandler() {
    // Make the API call to fetch user data
    this.apiService.getUser(this.search).subscribe((res) => {
      // Set the response data in the response service
      this.responseService.setResponseData(res, this.search);
      
      // Subscribe to the response data observable to get the latest data
      this.responseService.getResponseData().subscribe((res) => {
        if (res) {
          // Extract the necessary data from the response
          this.localResOfNav = res.data;
          this.userImg = this.localResOfNav.avatar_url;
          this.username = this.localResOfNav.login;
          this.isloadingDone = true;
          // console.log("Data received:", this.localResOfNav);
        }
      });
    });
  }
  handleKeypress(e:KeyboardEvent){
    if(e.key==='Enter')
    {
      this.clickHandler();
    }
  }
  
}
  
  // res: any;
  // searchTerm: string = 'johnpapa';
  // isApicall: boolean = false;
  // arrayOfRepo: any;
  // pages: number = 10;
  // currentPage: number = 1;
  // totalPages: number[] = [];
  // isloading:boolean=false;

  // clickHandler()
  // {
  //   this.apicall();
  //   this.isApicall = true;
  //   this.isloading=true;
  //   console.log("clicked");
  // }

  // apicall() {
  //   this.apiService.getUser(this.searchTerm).subscribe((response) => {
  //     this.responseService.setResponseData(response);
  //     this.res = this.responseService.getResponseData();
  //   });

  //   this.apiService.getUser(this.searchTerm + '/repos').subscribe({
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
  
