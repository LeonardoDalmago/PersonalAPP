import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: false,
})
export class ContactPage implements OnInit {
  nome = '';
  email = '';
  mensagem = '';
  constructor(private toastController: ToastController) { }
  ngOnInit() {
  }
  enviarMensagem() {
    this.nome = '';
    this.email = '';
    this.mensagem = '';

    this.toastController.create({
      message: 'Mensagem enviada com sucesso!',
      duration: 2000
    }).then(toast => toast.present());
  }

}
