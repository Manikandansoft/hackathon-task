import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should text box value is number', () => {
    const type = 'number';
    const value = 123;
    component.changeType();
    expect(component.textBoxType).toBe(type);
    component.textBox = 123;
    component.numberValidation();
    expect(component.textBox).toBe(value);

  });

  // it('should text box value is alphabets', () => {
  //   const type = 'alphabets';
  //   const value = 'test';
  //   component.changeType();

  //   expect(component.textBoxType).toBe(type);
  //  fixture.detectChanges();
  //   component.textBox = 'test';
  //   component.allowAlphabets();
  //   expect(component.textBox).toBe(value);
  // });
});
