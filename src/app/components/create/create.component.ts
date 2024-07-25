import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  registroForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl(''),
  });


  registro: any;

  ngOnInit(): void {
  }

  crearRegistro(): void {

    console.log("Creando...");
    console.log(this.registroForm);

    this.registro = this.registroForm.value;

    console.log("validando...");
    console.log(this.registro);

    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      body: JSON.stringify({
        title: this.registro.title,
        body: this.registro.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
