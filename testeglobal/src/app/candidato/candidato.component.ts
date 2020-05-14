import { Component, OnInit, OnChanges } from '@angular/core';
import { CandidatoService } from './candidato.service';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from './candidato';

@Component({
  templateUrl: './candidato.component.html'
})

export class CandidatoComponent implements OnInit, OnChanges {

  candidato: Candidato;

  constructor(private activedRoute: ActivatedRoute, private candidatoServie: CandidatoService) {}

  // tslint:disable-next-line:quotemark
  ngOnChanges(): void {
    this.retrieveById();
  }

  ngOnInit(): void {
    this.candidato = new Candidato();
  }

  save(): void {
    this.candidatoServie.save(this.candidato);
  }

  retrieveById(): void{
    this.candidato = this.candidatoServie.retrieveById(+this.activedRoute.snapshot.paramMap.get('id'));
  }

  delete(): void{

    this.candidatoServie.remove(this.candidato);
  }

}
