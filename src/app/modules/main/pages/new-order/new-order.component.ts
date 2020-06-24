import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  theme = 'vs-dark';

  options = {
    lineNumbers: true,
    contextmenu: true,
  };

  code = '';
  shots = '100';

  constructor() {}

  ngOnInit() {}

  onCreate() {
    console.log(this.code);
  }
}
