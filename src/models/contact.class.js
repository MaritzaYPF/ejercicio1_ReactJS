import { ESTADO } from "./estado";

export class Contacts{
   nombre = '';
   apellido = '';
   email = '';
   estado = ESTADO.conectado
   
   constructor(nombre,apellido,email,estado){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.estado = estado;
   }
}