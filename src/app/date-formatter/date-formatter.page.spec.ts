import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateFormatterPage } from './date-formatter.page';

describe('DateFormatterPage', () => {
  let component: DateFormatterPage;
  let fixture: ComponentFixture<DateFormatterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFormatterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateFormatterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
