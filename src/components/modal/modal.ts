import { Component, ViewChild } from '@angular/core';

import { NavController, Nav } from 'ionic-angular';
import { Login } from '../components/login/login';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class Modal {
    isOpen: Boolean = false;
    cssClass: string = 'modal-closed';
    @ViewChild(Nav) nav: Nav;

    constructor() { }

    push(page: any) {
        if (!this.isOpen)
            this.open();
      console.log("push to modal");
      console.log(page);
      this.nav.push(page);
    }
    open() {
        this.isOpen = true;
        this.cssClass = 'modal-open'
    }
    close() {
        this.isOpen = false;
        this.cssClass = 'modal-closed'
    }
}
