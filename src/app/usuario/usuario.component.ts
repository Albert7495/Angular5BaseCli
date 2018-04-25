import { Component, OnInit } from '@angular/core';
import { ValidarService } from '../services/validar.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:string;
  password:string;
  hide:true;
  constructor(private _validarService: ValidarService, public router: Router,private snackBar: MatSnackBar) { }

    ngOnInit() {
  
    }
    validarUsuario(){
      
      if(this._validarService.setValida(this.usuario,this.password)){
        this.router.navigate(['/']);
      }else{
        this.snackBar.open('Usuario Invalido', 'Error', { duration: 2000,});
      }
    }

      

}