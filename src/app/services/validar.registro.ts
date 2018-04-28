import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterComponent } from "../register/register.component";

let output = document.getElementById('output');
@Injectable()
export class ValidarRegistro {

  constructor() { }


  setValidaUsuario(usuario:string):boolean{
    let numCaracter
    numCaracter = usuario.length;
    return numCaracter<5 && numCaracter>15;
  }
}
