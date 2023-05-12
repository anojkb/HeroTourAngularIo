import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() namedata: any;
  @Input() markdata: any;
  @Input() objdata: any;
  constructor() { }
  ngOnInit(): void {

  }

  listarray = [{ "name": "Ravi", "mark": "75" }];
  updateList(obj: any) {
    this.listarray.push(obj);
    return obj.name +"is added";
  }
}
