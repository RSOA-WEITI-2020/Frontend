import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Task } from 'src/app/core/model/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskBaseURL = environment.taskBaseUrl;

  constructor(private http: HttpClient) {}

  getMyTasks(): Observable<Task[]> {
    return this.http.get<any>(`${this.taskBaseURL}/v1/task`).pipe(
      tap(console.log),
      map((tasks) => {
        return tasks.map(
          (t) =>
            ({
              ...t,
              start_time: Date.parse(t.start_time),
              end_time: Date.parse(t.end_time),
            } as Task)
        );
      })
    );
  }

  getTask(taskId: number): Observable<Task> {
    return this.http.get<any>(`${this.taskBaseURL}/v1/task/${taskId}`).pipe(
      map((task) => {
        return {
          ...task,
          start_time: Date.parse(task.start_time),
          end_time: Date.parse(task.end_time),
        } as Task;
      })
    );
  }

  addTask(code: string, shots: number): Observable<void> {
    const body = {
      code,
      shots,
    };
    return this.http.post(`${this.taskBaseURL}/v1/task`, body).pipe(map(() => null));
  }
}
