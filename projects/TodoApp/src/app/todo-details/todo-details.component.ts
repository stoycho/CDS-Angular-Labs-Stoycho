import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todoIndex;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.todoIndex = this.route.snapshot.paramMap.get('todoIndex');
  }
}
