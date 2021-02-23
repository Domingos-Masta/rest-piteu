import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   user = {
    nome: "Rico Chivela",
    idade: 40,
    descricao: "Programador experiente ucan"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
