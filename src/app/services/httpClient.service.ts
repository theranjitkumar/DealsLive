import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: any; // 'json';
    withCredentials?: boolean;
    body?: any;
}

export function appHttpClientCreator(http: HttpClient) {
    return new AppHttpClient(http);
}

@Injectable({
    providedIn: 'root'
})
export class AppHttpClient {

    private api = environment.API_URL;

    // Extending the HttpClient through the Angular DI.
    public constructor(public http: HttpClient) {
        // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
        // for ex. this.httpClient.http.get(...)
    }

    /**
     * GET request
     * @param {string} endPoint it doesn't need / in front of the end point
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(this.api + endPoint, options);
    }

    /**
     * POST request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.post<T>(this.api + endPoint, params, options);
    }

    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.put<T>(this.api + endPoint, params, options);
    }

    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Patch<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.patch<T>(this.api + endPoint, params, options);
    }

    /**
     * DELETE request
     * @param {string} endPoint end point of the api
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public Delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.delete<T>(this.api + endPoint, options);
    }
}
