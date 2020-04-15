import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalConstants {
    private urlLabels: string = "assets/labels.json";
    constructor(
        private http: HttpClient
    ){}

    getLabels(): Promise<any[]>{
        console.log('url:', this.urlLabels)
        return this.http.get<any[]>(this.urlLabels).toPromise().then (res => {
            return res
        });;
    }  
    // public static siteTitle: string = "data of title";
}