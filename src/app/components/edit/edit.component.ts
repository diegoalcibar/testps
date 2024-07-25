import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

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

  actualizarRegistro(): void {

    console.log("Actualizando...");
    console.log(this.registroForm);

    this.registro = this.registroForm.value;

    console.log("validando...");
    console.log(this.registro);

    fetch('https://jsonplaceholder.typicode.com/posts/' + this.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: this.registro.id,
        title: this.registro.title,
        body: this.registro.body,
        userId: this.registro.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

}
