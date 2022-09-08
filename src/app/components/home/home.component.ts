import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public apiService: ApiService) {

  }

  ngOnInit(): void {
  }

  public searchProducts(searchStr: string) {
    this.apiService.searchProductGet(searchStr).subscribe((res: any) => {
      this.apiService.searchResults = res['SearchResult'].Items;

      let url = searchStr.toLowerCase().split(' ').join('-')
      this.router.navigate(['/', url]);

      console.log(this.apiService.searchResults);
    }, err => {
      JSON.stringify(err);
    })
  }

}
