import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectDetailComponent } from '../components/project-detail/project-detail.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: false,
})
export class ProjectsPage implements OnInit {

  projetos = [
    {
      titulo: 'Projeto MeuPWA',
      descricao: 'Desenvolvido com HTML, CSS, JS.',
      link: 'https://github.com/LeonardoDalmago/meupwa'
    },
    {
      titulo: 'Projeto TodoList',
      descricao: 'Desenvolvido com Ionic básico.',
      link: 'https://github.com/LeonardoDalmago/todolist'
    },
    {
      titulo: 'Projeto Personal APP',
      descricao: 'App de apresentação pessoal',
      link: 'https://github.com/LeonardoDalmago/personalapp'
    }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async abrirDetalhes(projeto: any) {
    const modal = await this.modalController.create({
      component: ProjectDetailComponent,
      componentProps: { projeto }
    });
    await modal.present();
  }

}
