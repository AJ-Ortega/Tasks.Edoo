import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  world:any;
  result!: any[];
  final!:any; 
  
  constructor() { }

  ngOnInit(): void {
  }

  converter(){
    this.result = [];
    var n = 0;
    var condition = this.world.split(' ').length
    var storage;

    while(n <= condition-1 ){
      storage = this.world.split(' ')[n]
      if(storage.length >= 5){
        storage = storage.split('').reverse().join('')
      }
      this.result.push(storage)
      n = n+1
   }
   this.final = this.result.join(' ');
  }
}
