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

        if (json_comics) {
            for (let i = 0; i < json_comics.length; i++) {
                const found_comic = comics.data.results.find(id => id.id === json_comics[i].id);
                found_comic.like = json_comics[i].like;
                found_comic.dislike = json_comics[i].dislike;
            }
        } else {
            for (let i = 0; i < comics.data.results.length; i++) {
                comics.data.results[i].like = 0;
                comics.data.results[i].dislike = 0;
            }
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
