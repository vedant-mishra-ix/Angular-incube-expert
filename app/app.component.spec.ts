import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent1 } from './app.component';

describe('AppComponent1', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent1);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Firstangularvedant'`, () => {
    const fixture = TestBed.createComponent(AppComponent1);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Firstangularvedant');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Firstangularved app is running!');
  });
});
