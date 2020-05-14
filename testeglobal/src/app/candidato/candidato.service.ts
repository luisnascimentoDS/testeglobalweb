import { Injectable } from '@angular/core';
import { Candidato } from './candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  retrieveAll(): Candidato[] {
    return CANDIDATOS;
  }

  retrieveById(id: number): Candidato {
    return CANDIDATOS.find((iterator: Candidato) => iterator.id === id);
  }

  save(candidato: Candidato): void {
      const index = (CANDIDATOS.length) - 1;
      // tslint:disable-next-line:variable-name
      const _aux: Candidato = CANDIDATOS[index];
      candidato.id = _aux.id + 1;
      CANDIDATOS.push(candidato);
  }

  remove(candidato: Candidato): void{
    if (candidato.id){
      const index = CANDIDATOS.findIndex((iterator: Candidato) => iterator.id === candidato.id);
      CANDIDATOS.slice(index, 1);
    }
  }
}

// tslint:disable-next-line:prefer-const
let CANDIDATOS: Candidato[] = [
  {
    id: 1,
    nome: 'João',
    nota: 3.0,
  },
  {
    id: 2,
    nome: 'Ricardo',
    nota: 5.0,
  },
  {
    id: 3,
    nome: 'Pedro',
    nota: 4.5,
  }
];
