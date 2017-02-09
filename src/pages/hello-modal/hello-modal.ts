import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';
import { HelloLogin } from '../hello-login/hello-login';
import {PressDirective} from './swipedown';

@Component({
  selector: 'hello-modal',
  templateUrl: 'hello-modal.html',
  
})
export class HelloModal {

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) { }
    swipeEvent(e) {
        console.log("Swipe")
    }
    close() {
      this.viewCtrl.dismiss();
  }
}
