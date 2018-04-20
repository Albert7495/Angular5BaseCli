import { Component, OnInit } from '@angular/core';
import { ValidarService } from '../services/validar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:string;
  password:string;
 
  constructor(private _validarService: ValidarService, private router: Router) { }

    ngOnInit() {
   
    }
    validarUsuario(){
      this._validarService.setValida(this.usuario,this.password);
    }
    cambiarPage(){
      this.router.navigate(['/']);
    }
    usuarioError(){

    }
}