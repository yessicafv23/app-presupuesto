import { Router } from '@angular/router';
import { PresupuestoService } from './../../services/presupuesto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.scss']
})
export class IngresarPresupuestoComponent implements OnInit {
  cantidad: number = 0;
  cantidadIncorrecta: boolean = false;

  // Inyectamos el servicio PresupuestoService
  constructor(private _presupuestoService: PresupuestoService, private router: Router) {

   }

  ngOnInit(): void {
  }

  agregarPresupuesto():void{
    if (this.cantidad > 0){
      this.cantidadIncorrecta = false;
      // Cuando e usuario hace click el agregar lo que hace es almacenar dentro del servicio el presupuesto loque el usuario haya colocado en cantidadd
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      // Redireccionar al dar click al botón
      this.router.navigate(['/gastos'])

    }else{
      this.cantidadIncorrecta = true;
    }

  }

}
