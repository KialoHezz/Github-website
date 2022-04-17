import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAcessTokenComponent } from './person-acess-token.component';

describe('PersonAcessTokenComponent', () => {
  let component: PersonAcessTokenComponent;
  let fixture: ComponentFixture<PersonAcessTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonAcessTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAcessTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
