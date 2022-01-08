import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/Task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = {
    key: "",
    value: ""
  }
  key:string

  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(){
    this.key = this.route.snapshot.params['key']
    this.service.getByKey(this.key).subscribe(task => {
      this.task = task
      console.log(this.key)
    })
  }
  delete(){
    
    this.service.delete(this.key).subscribe(()=>{
      alert('Tarefa Encerrada!!')
      this.router.navigate(['/home'])
    })
  }

}
