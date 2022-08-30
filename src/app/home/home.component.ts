// Copyright (c) 2022 Prakash Menon
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'The Kitchen Sink Application';

  constructor() {}

  ngOnInit(): void {}
}
