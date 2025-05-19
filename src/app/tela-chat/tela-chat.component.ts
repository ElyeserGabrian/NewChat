import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tela-chat.component.html',
  styleUrl: './tela-chat.component.css'
})
export class TelaChatComponent {

  mensagens = [
    { texto: 'Oi tudo bem sim!', hora: '12:30', delete: false },
  ];

  textoMsg = '';


  enviarMsg() {
    if (this.textoMsg !== '') {
      let horaCerta = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      this.mensagens.push({
        texto: this.textoMsg,
        hora: horaCerta,
        delete: false,
      });

      this.textoMsg = '';
    }
  }

}