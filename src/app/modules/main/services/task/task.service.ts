import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/core/model/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskBaseURL = environment.taskBaseUrl;

  constructor(private http: HttpClient) {}

  getMyTasks(): Observable<Task[]> {
    return this.http.get<any>(`${this.taskBaseURL}/v1/my-tasks`).pipe(
      map((tasks) => {
        return tasks.map(
          (t) =>
            ({
              ...t,
              start_time: new Date(t.start_time),
              end_time: new Date(t.end_time),
            } as Task)
        );
      })
    );
  }

  addTask(task: Task): Observable<Task> {
    return of(null);
  }
}
