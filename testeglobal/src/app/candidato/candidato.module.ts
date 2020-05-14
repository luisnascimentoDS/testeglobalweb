import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CandidatoComponent } from './candidato.component';
import { CandidatoListComponent } from './candidato-list.component';
import { NgModule } from '@angular/core';
import { StarComponent } from '../star/star.component';

@NgModule({
    declarations:[
      CandidatoComponent,
      CandidatoListComponent,
      StarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
          {
            path: 'cadastro', component: CandidatoComponent
          },
          {
            path: 'candidatos', component: CandidatoListComponent
          },
          {
            path: 'candidato/:id', component: CandidatoComponent
          }
        ])
    ]
})
export class CandidatoModule {

}
