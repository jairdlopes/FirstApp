import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuadradoPage } from './quadrado.page';

describe('QuadradoPage', () => {
  let component: QuadradoPage;
  let fixture: ComponentFixture<QuadradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
