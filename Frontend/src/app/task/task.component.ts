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

  tarefa: Task = {
    key: "",
    value: ""
  }

  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(){
    const key = this.route.snapshot.params['key']
    console.log(key)
    this.service.getByKey(key).subscribe(task => {
      this.tarefa = task
    })
  }

}
