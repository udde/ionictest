import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';

@Component({
  selector: 'page-page2',
  template: `
    <ion-content>
      <div class="page2">
        <h1>Page 2</h1>
          <button (click)="topage2()">to page 2</button>
        <h1>ok</h1>
      </div>
    </ion-content>
  `
})
export class Page2 {

  modalClass: string;
  modal: HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // if( navParams.get('parent')) {

    //   this.modalClass = "modal-"+navParams.get('modal');
    //   this.modal = navParams.get('parent');

    //   console.log(this.modalClass);
    //   console.log(this.modal);

    //   this.modal.classList.add(this.modalClass);
    // }
  }
  // topage2() {
  //   this.navCtrl.push(Page1, {modal: 'active'});
  // }
}
