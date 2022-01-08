import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  task: Task = new Task
  listKey: Task[]
  
  constructor(
    private service: TaskService,
  
  ) { }

  ngOnInit(){
    this.getAllKeys()
  }

  getAllKeys(){
    this.service.getAll().subscribe((resp: Task[])=>{
      this.listKey= resp
    }) 
  }
  createTask(){
    if(this.task.value.length >= 10){
    this.service.post(this.task).subscribe(()=>{
      alert("Tarefa Criada!!")
      window.location.reload()
    })
  }else{
    alert("Ops! O valor deve conter pelo menos 10 caracteres!")
  }
  }
}