import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

// const environment
const hostname        = environment.hostname;
const version         = environment.version;
const api_public_key  = environment.api_public_key;
const api_hash        = environment.api_hash;

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  // get data to comics
  async getComics() {
    let dataComics;
		await this.http.get(`${ hostname }/${ version }/public/comics?ts=1&apikey=${ api_public_key }&hash=${ api_hash }`).toPromise().then(data => {
			dataComics = data;
    });
    
    return dataComics;
  }
}
