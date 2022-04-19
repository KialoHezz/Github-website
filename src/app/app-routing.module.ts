import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonAcessTokenComponent } from './person-acess-token/person-acess-token.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'PersonalAccessToken', component: PersonAcessTokenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
