import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/model/task.model';
import { TaskService } from '../../services/task/task.service';

@Component({
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  loading = true;
  tasks: Task[];

  constructor(private taskService: TaskService, private router: Router) {
    this.tasks = [];
  }

  ngOnInit() {
    this.loadData();
  }

  onRefresh() {
    this.loadData();
  }

  onNewTask() {
    this.router.navigate(['/main/new-order']);
  }

  loadData() {
    this.loading = true;

    this.taskService.getMyTasks().subscribe(
      (tasks) => {
        console.log(tasks);
        this.tasks = tasks;

        this.loading = false;
      },
      (error) => {
        this.tasks = [];
        this.loading = false;
        alert(error.message);
      }
    );
  }

  onShowTaskDetails(taskId: number) {
    this.router.navigate(['/main/order', taskId]);
  }
}
