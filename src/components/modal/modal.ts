import { Component, ViewChild } from '@angular/core';

import { NavController, Nav } from 'ionic-angular';
import { Login } from '../login/login';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class Modal {
    rootPage: any = Login;
    isOpen: Boolean = false;
    modalClass: string = 'modal-closed';
    @ViewChild(Nav) nav: Nav;

    constructor() { }

    push(page: any) {
        if (!this.isOpen)
            this.open();
      console.log("push to modal");
      console.log(page);
      this.nav.push(Login);
    }
    open() {
        this.isOpen = true;
        this.modalClass = 'modal-open'
    }
    close() {
        this.isOpen = false;
        this.modalClass = 'modal-closed'
    }
}
