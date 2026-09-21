import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  contador = 0;
  mensaje = 'El contador está en cero';

  aumentar() {
    this.contador++;
    this.mensaje = 'Aumentaste el contador';
  }

  disminuir() {
    this.contador--;
    this.mensaje = 'Disminuiste el contador';
  }

  reiniciar() {
    this.contador = 0;
    this.mensaje = 'El contador fue reiniciado';
  }
}