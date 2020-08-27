import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

/* services */
import { ComicsService } from '../services/comics.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    listComics: any;
    isSkeleton: boolean = true;

    constructor(private comicsService: ComicsService) { }

    ionViewWillEnter() {
        this.getComics();
    }

    async getComics() {
        const comics_storage = await this.getItemStorage('comics');
        const comics = await this.comicsService.getComics();

        const json_comics = JSON.parse(comics_storage);

        for (let i = 0; i < comics.data.results.length; i++) {
            /* find like and dislike on localstorage */
            const found_comic = json_comics ? json_comics.find(id => id.id === comics.data.results[i].id) : null;
            comics.data.results[i].like = found_comic ? found_comic.like : 0;
            comics.data.results[i].dislike = found_comic ? found_comic.dislike : 0;
        }

        await this.setItemStorage('comics', JSON.stringify(comics.data.results));

        this.listComics = comics.data.results;
        this.isSkeleton = false;
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

    /* update data to storage */
    async setItemsStorage() {
        await this.setItemStorage('comics', JSON.stringify(this.listComics));
    }

}
