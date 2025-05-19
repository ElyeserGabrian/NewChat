import { Routes } from '@angular/router';
import { TelaChatComponent } from './tela-chat/tela-chat.component';
import { HomeComponent } from './tela-home/tela-home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chat', component: TelaChatComponent}
];