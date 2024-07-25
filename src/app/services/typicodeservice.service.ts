import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypicodeserviceService {

  constructor() { }
  listado: any[] = [];

  obtenerListadox(): Promise<any[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json().then((data) => data.json()).catch((err) => {
          console.log(err);
        })
      });
  }

  async fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    this.listado  = await response.json();
    console.log('Obteniendo data');
    console.log(this.listado );
  }

  obtenerListado(): any[] {
    this.fetchData();
    return this.listado;
  }
}
