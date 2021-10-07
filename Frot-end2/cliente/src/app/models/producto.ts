export class Producto {
    _id?: number;
  
    color: string;
    modelo: string;
    longitud: string;
    latitud: string;
   

    

   

    constructor(  color: string, modelo: string, longitud: string, latitud: string,
       ){

        
        this.color = color;
        this.modelo = modelo;
        this.longitud = longitud;
        this.latitud = latitud;
       
    }
}