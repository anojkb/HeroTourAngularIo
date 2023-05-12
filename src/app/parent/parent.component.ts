import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  @ViewChild(ChildComponent) viewData!: ChildComponent;
  title = "Parent Component";
  inputname = '';
  inputMark = '';
  inputObject = { name: "", mark: "" };
  response: any;
  TransferData(name: any, mark: any) {
    this.inputname = name;
    this.inputMark = mark;
    this.inputObject = { "name": name, "mark": mark }
    this.response=this.viewData.updateList(this.inputObject);
  }



}
