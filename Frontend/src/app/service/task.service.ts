import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {  
  }
  getAll():Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:8080/api')
  }
  getByKey(key: string):Observable<Task>{
    return this.http.get<Task>('http://localhost:8080/api/task/${key}')
  }
  post(task: Task):Observable<Task>{
    return this.http.post<Task>('http://localhost:8080/api/add/task', task)
  }
  delete(key: string){
    return this.http.delete('http://localhost:8080/api/task/${key}')
  }
}
