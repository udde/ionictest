import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  template: `
    <ion-content padding>
      <div class="page2">
        <h1>Page 2</h1>
        <h1>ok</h1>
      </div>
    </ion-content>
  `
})
export class Page2 {

  modalClass: string;
  modal: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    if( navParams.get('parent')) {

      this.modalClass = "modal-"+navParams.get('modal');
      this.modal = navParams.get('parent');
  
      console.log(this.modalClass);
      console.log(this.modal);
  
      this.modal.classList.add(this.modalClass)
    }

  }
}
