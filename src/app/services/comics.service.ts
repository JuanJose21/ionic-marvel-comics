import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

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
		await this.http.get(`${ hostname }/${ version }/public/comics?ts=1&apikey=${ api_public_key }`).toPromise().then(data => {
			return data;
		});
  }

  async setItemStorage(key, value) {
    await Storage.set({
      key: key,
      value: value
    });
  }
}
