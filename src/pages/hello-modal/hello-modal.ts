import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { HelloLogin } from '../hello-login/hello-login';

@Component({
  selector: 'hello-modal',
  templateUrl: 'hello-modal.html'
})
export class HelloModal {

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) { }
  
    close() {
      this.viewCtrl.dismiss();
  }
}
