export class Contacto{
    nombre = '';
    apellido = '';
    email = '';
    conectado = true;

    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = false;
    }
}