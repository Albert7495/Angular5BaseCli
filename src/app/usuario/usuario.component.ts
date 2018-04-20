import { Component, OnInit } from '@angular/core';
import { ValidarService } from '../services/validar.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:string;
  password:string;
  constructor(private _validarService: ValidarService) { }

  ngOnInit() {
   
  }
  validarUsuario(){
    this._validarService.setColor(this.usuario,this.password);
  }
}