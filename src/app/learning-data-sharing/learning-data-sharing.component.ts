import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../data-sharing';

@Component({
  selector: 'app-learning-data-sharing',
  templateUrl: './learning-data-sharing.component.html',
  styleUrls: ['./learning-data-sharing.component.scss']
})
export class LearningDataSharingComponent implements OnInit {

  @Input()  teacher!: Teacher;
  @Input('principle') principleName!: string;

  constructor() { }

  ngOnInit() {
  }
}
