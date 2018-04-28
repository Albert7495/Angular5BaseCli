import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ValidarRegistro } from '../services/validar.registro';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario:string;
  password:string;
  rpassword:string
  nombre:string;
  hide:true;

  constructor() { }

  ngOnInit() {
  }

  validarRegistro(){
    let flag=true; 
    /*   * */
      if(!this.setValidaUsuario()){
        console.log("Debe tener entre 5 y 15 caracteres");
        flag=false;
      }
      /*   * */
      if(this.setValidaPasswoord()==0){
        console.log("Debe tener  1 Mayuscula");
        flag=false;
      }

   /** */
      if(this.setValidaRpasswoord()){
     console.log("no coincide");
     flag=false;
       }
      /** */
      if(this.setValidaNombre()!=0){
        console.log("no numeros");
        flag=false;
          }

      // var isChecked = document.getElementById('check1').checked;
      // if(isChecked){
      //   alert('checkbox esta seleccionado');
      //   }
  }

  setValidaUsuario():boolean{
    let numCaracter
      console.log('Ingresa Usuario')
      numCaracter = this.usuario.length;
      return numCaracter>4 && numCaracter<15;
  
  }

  setValidaPasswoord():number{
    let mayusculas="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cont = 0;
      console.log('Ingresa Pass')
 
      for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < this.password.length; x++) {
              if(this.password[x]==mayusculas[i]){
                cont+=1;
            }
          }
        }
  
        return cont;
  
  }
  setValidaRpasswoord():boolean{
    return this.password!=this.rpassword;
  }
  setValidaNombre(){
    let num="1234567890";
    var cont2 = 0;
   
      console.log('Ingresa Nombre')
  
      for (var i = 0; i < num.length; i++) {
        for (var x = 0; x < this.nombre.length; x++) {
              if(this.nombre[x]==num[i]){
                cont2+=1;
            }
          }
        }
  
        return cont2;
    
  }
}