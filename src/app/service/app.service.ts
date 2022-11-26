import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    addRequest(request: any) {
        return this.http.post('/api/addShow', request, { reportProgress: true, responseType: 'json'})
    }
    getRequest(request: any) {
        return this.http.get('/api/getShow', request)
    }
}