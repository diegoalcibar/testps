import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  registroForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl(''),
  });

  id: number = 0;
  registro: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.obtenerRegistro();
    console.log(this.id);
  }

  obtenerRegistro(): void {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
      .then((response) => response.json())
      .then((json) => this.registro = json)
      .then((reg) => this.registroForm = this.formBuilder.group(reg))
      .then((log) => console.log(log));
  }

  eliminarRegistro(): void {

    console.log("Eliminando...");
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.id, {
      method: 'DELETE',
    });
  }

}
