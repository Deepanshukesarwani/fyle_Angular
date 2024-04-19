// import { Component ,OnInit,OnDestroy } from '@angular/core';
// import { ApiService } from 'src/app/services/api.service';
// import { ResponseService } from 'src/app/services/responce.service';
// import { Subscription } from 'rxjs';
// @Component({
//   selector: 'app-repo-card',
//   templateUrl: './repo-card.component.html',
//   styleUrls: ['./repo-card.component.scss']
// })
// export class RepoCardComponent implements OnInit, OnDestroy {
//   LocalresOfRepo:any;
//   IsSearched: boolean = false;
//   User:string="";
//   Repodetail:any;
//   Isloading:boolean=true;
//   private responseDataSubscription!: Subscription;


//   constructor(
//     private apiService:ApiService,
//     private responseService: ResponseService,

//   ){}
// getRepo()
//   {
//     this.apiService.getUser(this.User +"/repos").subscribe(
//       (response) => {      
//         this.Repodetail =response;
//         console.log(this.Repodetail);
//         this.IsSearched=false;
//         console.log("getrepo method")
//     }
//     );
//   }
//   ngOnInit() {
//     this.responseDataSubscription = this.responseService.getResponseData().subscribe(data => {
//       if(data)
//       {
//         this.LocalresOfRepo=data.data;
//         this.User=data.username;
//         console.log("klmnk"+this.User);
//       }
//     });

//     if(this.User)
//     {
//       this.getRepo();
//       console.log("jj")
//     }
//   }

//   ngOnDestroy() {
//     this.responseDataSubscription.unsubscribe();
//   }
  
// }

import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ResponseService } from 'src/app/services/responce.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit, OnDestroy {
  LocalresOfRepo: any;
  IsSearched: boolean = false;
  User: string = "";
  Repodetail: any;
  Isloading: boolean = true;
  private responseDataSubscription!: Subscription;

  constructor(
    private apiService: ApiService,
    private responseService: ResponseService,
  ) {}
  getRepo() {

    this.Isloading=true;
    this.apiService.getUser(this.User + "/repos").subscribe(
      (response) => {
        this.Repodetail = response;
        console.log(this.Repodetail);
        // this.Isloading = true;
        console.log("getRepo method");
      }     
    );
    this.Isloading=false;
  }

  ngOnInit() {
    this.responseDataSubscription = this.responseService.getResponseData().subscribe(res => {
      if (res) {
        this.LocalresOfRepo = res.data;
        this.User =res.username;
        console.log("klmnk" + this.User);
      }
      if (this.User) {
        this.getRepo();
        console.log("jj");
      }
    });

   
  }

  ngOnDestroy() {
    this.responseDataSubscription.unsubscribe();
  }
}

  
  // OnInit()
  // {this.navdata.searchedStatusChange.subscribe((isSearched: boolean) => {
  //   this.IsSearched = isSearched;
  //   console.log('IsSearched:', this.IsSearched);
  // });
  // }
  
  // getRepo()
  // {
  //   this.res=this.responseService.getResponseData;
  //   console.log(this.res);
  // }
