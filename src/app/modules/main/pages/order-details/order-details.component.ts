import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/model/task.model';
import { TaskService } from '../../services/task/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  task: Task;

  constructor(taskService: TaskService, route: ActivatedRoute) {
    const taskIdStr = route.snapshot.params.id;
    const taskId = Number.parseInt(taskIdStr, 10);

    taskService.getTask(taskId).subscribe((task) => (this.task = task));
  }

  ngOnInit() {}
}
