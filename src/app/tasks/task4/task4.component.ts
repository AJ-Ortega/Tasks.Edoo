import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {

  jugador = true;
  btn1=0;
  btn2=0;
  btn3=0;
  btn4=0;
  btn5=0;
  btn6=0;
  btn7=0;
  btn8=0;
  btn9=0;
  reintentar:any;


  constructor() { }

  ngOnInit(): void {

  }

  btnPulsado(number:number){
      switch(number){
        case 1:
          if(this.btn1 != 0){

          }else{
            if(this.jugador == true){
              this.btn1 = 1;
              this.jugador = false;
              this.winner1()
            }else{
              this.btn1 = 2;
              this.jugador = true;
              this.winner2()
            }
          }
          break;
        case 2:
          if(this.btn2 != 0){

          }else{
          if(this.jugador == true){
            this.btn2 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn2 = 2;
            this.jugador = true;
            this.winner2()
          } 
        }
          break;
        case 3:
          if(this.btn3 != 0){

          }else{
          if(this.jugador == true){
            this.btn3 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn3 = 2;
            this.jugador = true;
            this.winner2()
          }
        }
          break; 
        case 4:
          if(this.btn4 != 0){

          }else{
          if(this.jugador == true){
            this.btn4 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn4 = 2;
            this.jugador = true;
            this.winner2()
          }
        }
          break;
        case 5:
          if(this.btn5 != 0){

          }else{
          if(this.jugador == true){
            this.btn5 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn5 = 2;
            this.jugador = true;
            this.winner2()
          }
        }
          break; 
        case 6:
          if(this.btn6 != 0){

          }else{
          if(this.jugador == true){
            this.btn6 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn6 = 2;
            this.jugador = true;
            this.winner2()
          }
        }
          break;
        case 7:
          if(this.btn7 != 0){

          }else{
          if(this.jugador == true){
            this.btn7 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn7 = 2;
            this.jugador = true;
            this.winner2()
          }
        }
          break; 
        case 8:
          if(this.btn8 != 0){

          }else{
          if(this.jugador == true){
            this.btn8 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn8 = 2;
            this.jugador = true;
            this.winner2()
          }
        }
          break; 
        case 9:
          if(this.btn9 != 0){

          }else{
          if(this.jugador == true){
            this.btn9 = 1;
            this.jugador = false;
            this.winner1()
          }else{
            this.btn9 = 2;
            this.jugador = true;
            this.winner2()
          }
        }
          break; 
      }
      if(this.btn1 != 0 && this.btn2 != 0 && this.btn3 != 0 && this.btn4 != 0 && this.btn5 != 0 && this.btn6 != 0 && this.btn7 != 0 && this.btn8 != 0 && this.btn9 != 0){
        this.reintentar = 1;
      }
    }
    

    reint(){
      this.btn1=0;
      this.btn2=0;
      this.btn3=0;
      this.btn4=0;
      this.btn5=0;
      this.btn6=0;
      this.btn7=0;
      this.btn8=0;
      this.btn9=0;
      this.reintentar = 0;
      this.jugador = true;
    }

    winner1(){
      if(this.btn1 == 1 && this.btn2 == 1 && this.btn3 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }else if(this.btn4 == 1 && this.btn5 == 1 && this.btn6 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }else if(this.btn7 == 1 && this.btn8 == 1 && this.btn9 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }else if(this.btn1 == 1 && this.btn4 == 1 && this.btn7 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }else if(this.btn2 == 1 && this.btn5 == 1 && this.btn8 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }else if(this.btn3 == 1 && this.btn6 == 1 && this.btn9 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }else if(this.btn1 == 1 && this.btn5 == 1 && this.btn9 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }else if(this.btn3 == 1 && this.btn5 == 1 && this.btn7 == 1){
        alert("Ganador: jugador 1")
        this.reint()
      }
      
    }
    winner2(){
      if(this.btn1 == 2 && this.btn2 == 2 && this.btn3 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }else if(this.btn4 == 2 && this.btn5 == 2 && this.btn6 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }else if(this.btn7 == 2 && this.btn8 == 2 && this.btn9 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }else if(this.btn1 == 2 && this.btn4 == 2 && this.btn7 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }else if(this.btn2 == 2 && this.btn5 == 2 && this.btn8 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }else if(this.btn3 == 2 && this.btn6 == 2 && this.btn9 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }else if(this.btn1 == 2 && this.btn5 == 2 && this.btn9 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }else if(this.btn3 == 2 && this.btn5 == 2 && this.btn7 == 2){
        alert("Ganador: jugador 2")
        this.reint()
      }
    }
}


