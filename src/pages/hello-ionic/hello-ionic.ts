import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { InputPage } from '../hello-input/hello-input';
import { HelloModal } from '../hello-modal/hello-modal';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public modalCtrl: ModalController) { }

  openModal() {

    let modal = this.modalCtrl.create(HelloModal, {data: 10}, {showBackdrop: false, enableBackdropDismiss: false});
    modal.present();
  }
}
