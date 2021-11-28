import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  showIddleMessage:boolean = true

  constructor() { }



  hideIddleMessage(){
    this.showIddleMessage = false
  }

  ngOnInit(): void {
  }

}
