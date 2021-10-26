export class Producto {
    _id?: number;
  
    usuario:String;
    color: string;
    modelo: string;
    longitud: string;
    latitud: string;
    estado: boolean;
   

    

   

    constructor(  usuario:String, color: string, modelo: string, longitud: string, latitud: string, estado: boolean
       ){

        
        this.usuario=usuario;
        this.color = color;
        this.modelo = modelo;
        this.longitud = longitud;
        this.latitud = latitud;
        this.estado=estado;
       
    }
}