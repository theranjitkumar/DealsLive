import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppHttpClient } from './httpClient.service';
// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService extends BehaviorSubject<any> {
    // private api = environment.API_URL;
    public searchResults: any[] = [];
    public searchStr: string = '';
    public constructor(
        // public http: HttpClient
        public $http: AppHttpClient
    ) {
        super({});
    }

    public searchProductGet(str: string) {
        return this.$http.Get('/paapi?search=' + str);
    }
    public searchProductPost(params: any) {
        return this.$http.Post('/paapi', params);
    }


}
