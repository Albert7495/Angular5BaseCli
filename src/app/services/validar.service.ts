import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { Router } from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';

@Injectable()
export class ValidarService {


  constructor(/*private _usuarioComponent:UsuarioComponent*/) { }

  setValida(usuario:string,password:string){

    if(usuario=='alberto' && password=='alr'){
       // this.router.navigate(['/']);
       // this._usuarioComponent.cambiarPage();
    }else{
     //   this._usuarioComponent.usuarioError();
    }
  }
}
