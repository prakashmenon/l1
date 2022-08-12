import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Injectable } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  let authServiceStub: Partial<AuthService>;
  authServiceStub = {
    isAuthenticated$: of(false),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [CommonModule],
      providers: [{ provide: AuthService, useValue: authServiceStub }],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'The Kitchen Sink Application'`, () => {
    //fixture.detectChanges();
    expect(component.title).toEqual('The Kitchen Sink Application');
  });

  it('should render title in header', () => {
    expect(
      compiled.querySelector('.docs-header-headline')?.textContent
    ).toContain('The Kitchen Sink Application');
  });

  it('should render login button if not authenticated', () => {
    expect(compiled.querySelector('button')?.textContent).toContain('Login');
  });

  it('should not render login button if authenticated', () => {
    let authService = TestBed.inject(AuthService);
    // Need to force update as isAuthenticated$ is readonly
    Object.defineProperty(authService, 'isAuthenticated$', { value: of(true) });
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeNull();
  });
});
