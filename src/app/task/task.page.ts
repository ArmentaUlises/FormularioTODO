import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  task;

  constructor(private activatedRoute: ActivatedRoute) {
    this.task = JSON.parse(this.activatedRoute.snapshot.paramMap.get('value'));
  }

  ngOnInit() {
  }

  deleteItem(item){
    this.task.splice(item, 1);
  }
  
  
}
