import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numbers = false;
  symbols = false;
  letters = false;

  password = "";

  lenght = 0;

  click(){
    
    const temLetras = "abcdefghijklmnopqrstuvwxyz";
    const temNumbers = "1234567890";
    const temSymbols = "!@#$%¨&*()";

    let myPassword = "";

    if (this.numbers){
      myPassword += temNumbers;
    }

    if (this.letters){
      myPassword += temLetras
    }

    if (this.symbols){
      myPassword += temSymbols
    }

    let generatePassword = "";
    for(let i = 0; i < this.lenght; i++){
      const index = Math.floor(Math.random() * myPassword.length)
      generatePassword += myPassword[index];
    }
    this.password = generatePassword;
  }

  getInput(value: string){
     
    const toNumber = parseInt(value, 10);

    if(!isNaN(toNumber)){
      this.lenght = toNumber;
    }
      return this.lenght;
  }

  getNumbers(){
    this.numbers = !this.numbers
  }


  getSymbols(){
    this.symbols = !this.symbols
  }


  getLetters(){
    this.letters = !this.letters
  }
}
