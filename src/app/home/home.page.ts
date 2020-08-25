import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

// services
import { ComicsService } from '../services/comics.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listComics:any;
  validationSkeleton: boolean = true;

  constructor(private comicsService: ComicsService) {}

  ionViewWillEnter() {
    this.getComics();
  }

  async getComics() {
    const comicsStorage = await this.getItemStorage('comics');
    
    // validate data storage
    if(!comicsStorage) {
      const comics = await this.comicsService.getComics();

      for (let i = 0; i < comics.data.results.length; i++) {
        comics.data.results[i].like = 0;
        comics.data.results[i].dislike = 0;
      }
      await this.setItemStorage('comics',JSON.stringify(comics.data.results));
    }

    this.listComics = JSON.parse(comicsStorage);
    this.validationSkeleton = false;
  }

  async setItemStorage(key, value) {
    await Storage.set({
      key: key,
      value: value
    });
  }

  async getItemStorage(key) {
    const { value } = await Storage.get({ key: key });
    return value;
  }

  // update data to storage
  async setItemsStorage(){
    await this.setItemStorage('comics',JSON.stringify(this.listComics));
  }

}
