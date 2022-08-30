// Copyright (c) 2022 Prakash Menon
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { expect } from '@jest/globals';

import { AuthButtonComponent } from '../auth-button/auth-button.component';
import { HomeComponent } from './home.component';

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
      declarations: [HomeComponent, AuthButtonComponent],
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
});
