// Copyright (c) 2022 Prakash Menon
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { expect } from '@jest/globals';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

import { AuthButtonComponent } from './auth-button.component';

describe('AuthButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;
  let compiled: HTMLElement;

  let authServiceStub: Partial<AuthService>;
  authServiceStub = {
    isAuthenticated$: of(false),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthButtonComponent],
      imports: [CommonModule],
      providers: [{ provide: AuthService, useValue: authServiceStub }],
    });

    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render login button if not authenticated', () => {
    expect(compiled.querySelector('button')?.textContent).toContain('Login');
  });

  it('should render logout button if authenticated', () => {
    let authService = TestBed.inject(AuthService);
    // Need to force update as isAuthenticated$ is readonly
    Object.defineProperty(authService, 'isAuthenticated$', { value: of(true) });
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Log out');
  });
});
