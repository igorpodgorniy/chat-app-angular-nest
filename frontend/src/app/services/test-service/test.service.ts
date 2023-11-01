import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Test {
    title: string,
}

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(
        private _http: HttpClient,
    ) {}

    getTest(): Observable<Test> {
        return this._http.get<Test>('api');
    }
}