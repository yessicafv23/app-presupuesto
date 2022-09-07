import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {

  constructor(private _presupuestoService: PresupuestoService, private router: Router) { }

  ngOnInit(): void {
    if(this._presupuestoService.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto'])
    }
    console.log('Presupuesto = ', this._presupuestoService.presupuesto);
  }

}
