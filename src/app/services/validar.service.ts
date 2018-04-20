import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ValidarService {

  //private usuario = new Subject<string>();
  //private password = new Subject<string>();

  constructor() { }

  setColor(usuario:string,password:string){
  //  this.usuario.next(usuario);
//this.password.next(password);

    if(usuario=='alberto' && password=='alr'){
        console.log('Chido');
    }
  }
}
