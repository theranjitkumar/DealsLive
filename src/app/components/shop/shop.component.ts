import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public results: any[] = [];

  constructor(public apiService: ApiService) {

    this.searchProduct('Deal Of The Day');
  }

  ngOnInit(): void {
  }

  public searchProduct(searchStr: string) {
    searchStr ? searchStr : 'Deal Of The Day'
    this.apiService.searchProductGet(searchStr).subscribe((res: any) => {
      // this.results = res['SearchResult'].Items;
      this.apiService.searchResults = res['SearchResult'].Items;
    }, err=>{
      JSON.stringify(err);
    })
  }

}
