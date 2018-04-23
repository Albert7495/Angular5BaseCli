import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';


let output = document.getElementById('output');
@Injectable()
export class ValidarService {
  
  private user = new Subject<string>();
  private pass = new Subject<string>();


  constructor(private router: Router) { }


  setValida(usuario:string,password:string):boolean{
    return usuario=='alberto' && password=='alr';
  }
}
