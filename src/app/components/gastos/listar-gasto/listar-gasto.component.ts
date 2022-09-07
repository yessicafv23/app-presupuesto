import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.scss']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  presupuesto: number = 0;
  restante: number = 0;
  listaGastos:any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      console.log(data);
      this.restante = this.restante - data.cantidad;
      // Push inserta el gasto a listado
      this.listaGastos.push(data);
    })
   }

  ngOnInit(): void {
    // Presupuesto y restante es igual a lo que tengamos en el servicio
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  aplicarColorRestante(){
    if(this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    }else if(this.presupuesto / 2 > this.restante){
      return 'alert alert-warning';
    }else{
      return 'alert alert-secondary';
    }
  }

}
