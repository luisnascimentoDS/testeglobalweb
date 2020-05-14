import { Component, OnInit, NgModule } from '@angular/core';
import { Candidato } from './candidato';
import { CandidatoService } from './candidato.service';

@Component({
  templateUrl: './candidato-list.component.html'
})
export class CandidatoListComponent implements OnInit{

  filteredCandidatos: Candidato[] = [];
  // tslint:disable-next-line:variable-name
  _candidatos: Candidato[] = [];
  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this._candidatos = this.candidatoService.retrieveAll();
    this.filteredCandidatos = this._candidatos;
  }

  get filter() {
    return this._filterBy;
  }
  set filter(value: string) {
    this._filterBy = value;
    // tslint:disable-next-line:max-line-length
    this.filteredCandidatos = this._candidatos.filter((candidato: Candidato) => candidato.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
}
