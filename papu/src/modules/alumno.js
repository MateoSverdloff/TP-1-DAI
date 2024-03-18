export default class Alumno  {
constructor(username, edad, dni){
    this.username = usuario;
    this.edad = edad;
    this.dni = dni;
}
}     

function getUsername(){
    return this.username;
}

function getEdad(){
    return this.edad;
}

function getDni(){
    return this.dni;
}

function getData(){
    return`nombre:${this.username},edad:${this.edad},dni: ${this.dni}`;
}