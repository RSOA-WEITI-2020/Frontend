import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/model/task.model';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  task: Task;

  constructor() {}

  ngOnInit() {}
}
