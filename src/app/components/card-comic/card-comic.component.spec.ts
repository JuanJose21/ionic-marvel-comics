import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardComicComponent } from './card-comic.component';

describe('CardComicComponent', () => {
  let component: CardComicComponent;
  let fixture: ComponentFixture<CardComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
