import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BaseHttpService {

	constructor(private http: HttpClient) { }

	get(url: string, headers?: any) {
		return this.http.get(`${environment.url}${url}`, { ...headers });
	}

	post(url: string, body: any, headers?: any) {
		return this.http.post(`${environment.url}${url}`, { ...body }, { ...headers });
	}

	delete(url: string, headers?: any) {
		return this.http.delete(`${environment.url}${url}`, { ...headers })
	}

	getHeaders(){
		 
	}
}
