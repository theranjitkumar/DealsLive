import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public apiService: ApiService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let searchStr = params['searchStr'];
      this.apiService.searchStr = searchStr.split('-').join(' ');
      this.apiService.searchProductGet(searchStr).subscribe((res: any) => {
        this.apiService.searchResults = res['SearchResult'].Items;
        console.log(this.apiService.searchResults);        
      }, err => {
        JSON.stringify(err);
      })
    });
  }

}
