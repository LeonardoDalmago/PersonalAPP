import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: false,
})
export class ProjectDetailComponent {

  @Input() projeto: any;

  constructor(private modalController: ModalController) {}

  fecharModal() {
    this.modalController.dismiss();
  }

}
