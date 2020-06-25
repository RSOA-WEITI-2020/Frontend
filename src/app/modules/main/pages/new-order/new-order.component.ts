import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { TaskService } from '../../services/task/task.service';
import { Router } from '@angular/router';

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
  shots = 100;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {}

  onCodeChanged(code: string) {
    this.code = code;
  }

  onShotsChanged(shots) {
    console.log(shots);
    this.shots = Number.parseInt(shots.target.value, 10);
  }

  onCreate() {
    this.taskService.addTask(this.code, this.shots).subscribe(
      () => {
        this.router.navigate(['/main/my-orders']);
      },
      (err) => alert(err.message)
    );
  }
}
