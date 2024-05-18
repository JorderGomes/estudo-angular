import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
  {path: '', component: CardComponent},
  {path: 'list', component: ListRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
