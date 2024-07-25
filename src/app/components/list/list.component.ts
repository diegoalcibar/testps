import { Component, OnInit } from '@angular/core';
import { TypicodeserviceService } from 'src/app/services/typicodeservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private servicio: TypicodeserviceService) { }
  listado: any[] = [];

  ngOnInit(): void {
    this.obtenerListado();

    console.log('Validando data 2');
    console.log(this.listado);

    console.log(this.listado);
  }

  obtenerListado() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => this.listado = json)
    .then((log) => console.log(log));
  }
}
