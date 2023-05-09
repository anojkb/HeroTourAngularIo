import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learndata-binding',
  templateUrl: './learndata-binding.component.html',
  styleUrls: ['./learndata-binding.component.scss']
})
export class LearndataBindingComponent implements OnInit{
  pageTitle:string = "simple data binding through interpolation";
  imagePath: string = "assets/images/angular.png";
  secTitle: string = "Property Binding";
  btnType:boolean = false;
  name:string ="";
  isSpecial:boolean= false;
  status = "error";
  isTrue:boolean = false;
  designation:string='';
  constructor(){}
  ngOnInit(): void {
    
  }
  changeTitle(){
    this.pageTitle = "data binding interpolation practice"
  }
  geeky = "GeekClass";
    g = document.getElementsByClassName(this.geeky);
  interPolation: string= "string interpolation";
  imagePosition:string = "assets/images/angular.png";
  applyStyle:boolean = true;
  submit(){
    this.interPolation = "change the text by event binding";
  }
  trueClass: boolean = true;
}
