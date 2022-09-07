import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.scss']
})
export class IngresarGastoComponent implements OnInit {
  gasto: string = '';
  cantidad: number = 0;
  formularioIncorrecto: boolean = false;
  textoIncorrecto: string = '';

  constructor(private _presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
  }

  agregarGasto():void{
    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;

    }

    if(this.gasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Nombre del gasto o cantidad incorrecta';
    }else{
      // Crear el objeto
      const gasto = {
        nombre: this.gasto,
        cantidad: this.cantidad
      }

      //Enviar objeto a los suscriptores via subject
      this._presupuestoService.agregarGasto(gasto);

      //Resetear formulario
      this.formularioIncorrecto = false;
      this.gasto = '';
      this.cantidad = 0;
    }
  }

}
