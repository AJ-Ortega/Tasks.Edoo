import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  nInit!: any;
  finalOP!: any;


  constructor() { }

  ngOnInit(): void {
  }

  fibonacci(){
    console.log(this.nInit)
    if(this.nInit == undefined || this.nInit == ''){
      this.finalOP = ''
    }else if(this.nInit <= 0){
      this.finalOP = 'Nulo';
    }else{
      var a = 0; var b = 1; var c=0;
      var succession = [];
      
      while( c <= this.nInit ){
        c = a + b
        a = b;
        b = c;
        succession.push(c);
      }
      succession.pop();
      this.zeckendorf(succession)
    }
  }
  

  zeckendorf(succession:any){
    var final = []
    var result = succession[succession.length-1] 
    result = this.nInit - result
    
    while(succession.length >= 1){  
      final.push(succession[succession.length-1]);
      while(succession[succession.length-1] >= result+1){
        succession.pop();
      }
      result = result - succession[succession.length-1]
    }
    this.finalOP = final.join(' ')
  }
}
