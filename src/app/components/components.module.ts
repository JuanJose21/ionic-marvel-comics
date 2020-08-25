import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/* import components */
import { CardComicComponent } from 'src/app/components/card-comic/card-comic.component';

@NgModule({
  declarations: [
    CardComicComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CardComicComponent
  ],
  providers: [
    CardComicComponent
  ],
})
export class ComponentsModule { }
