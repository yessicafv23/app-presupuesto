import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto: number = 0;
  restante: number = 0;
  private gastos$ = new Subject<any>();

  constructor() { }

  agregarGasto(gasto:any){
    this.restante = this.restante - gasto.cantidad;
    this.gastos$.next(gasto);
  }

  // A este metodo se van a suscribir todos los componentes que quieran estar escuchando cualquier cambio que haya en el metodo de agregarGasto
  getGastos(): Observable<any>{
    return this.gastos$.asObservable();
  }
}
