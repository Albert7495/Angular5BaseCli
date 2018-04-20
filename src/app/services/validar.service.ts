import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//import { Router } from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';


@Injectable()
export class ValidarService {
  
  private user = new Subject<string>();
  private pass = new Subject<string>();

  constructor() { }

  setValida(usuario:string,password:string){
    this.user.next(usuario);
    this.pass.next(password);
  }
  getEventValida(){

    return this.user.asObservable() && this.pass.asObservable(); 
  }
}
