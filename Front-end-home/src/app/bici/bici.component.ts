import { Component, OnInit } from '@angular/core';
import { BiciService } from '../shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Bici } from '../models/bici';


@Component({
  selector: 'app-bici',
  templateUrl: './bici.component.html',
  styleUrls: ['./bici.component.css']
})
export class BiciComponent implements OnInit {



  constructor(public biciService: BiciService) { }

  ngOnInit(): void {
  this.getBicis();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getBicis(){
    this.biciService.getBicis().subscribe(
      res=> {
        this.biciService.bicis=res;
      },
      err=>console.error(err)     
    );
  }

  addBici(form: NgForm ){
    if(form.value._id){
this.biciService.putBici(form.value).subscribe(
  res => console.log(res),
  err => console.error(err)
)
    }else {
      this.biciService.createBici(form.value).subscribe(
        (res) => {
          this.getBicis();
          form.reset();
        },
        (err) => console.error(err)
      );
    }
    
  }

  deleteBici(id: string){
 if (confirm('Esta seguro de querer eliminarlo?')){
   this.biciService.deleteBici(id).subscribe(res => {
     this.getBicis();
   },
   (err)=> console.log(err))
 }
  
  }

  editBici(bici: Bici){
   this.biciService.selectedBici =bici;
  }
}
