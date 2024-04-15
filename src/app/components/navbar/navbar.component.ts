import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ResponseService } from '../../services/responce.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private apiService: ApiService,
    private responseService: ResponseService
  ) {}

  res: any;
  searchTerm: string = 'johnpapa';
  isApicall: boolean = false;
  arrayOfRepo: any;
  pages: number = 10;
  currentPage: number = 1;
  totalPages: number[] = [];
  isloading:boolean=false;

  clickHandler()
  {
    this.apicall();
    this.isApicall = true;
    this.isloading=true;
    console.log("clicked");
  }

  apicall() {
    this.apiService.getUser(this.searchTerm).subscribe((response) => {
      this.responseService.setResponseData(response);
      this.res = this.responseService.getResponseData();
    });

    this.apiService.getUser(this.searchTerm + '/repos').subscribe({
      next: (response) => {
        this.arrayOfRepo = response;
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
