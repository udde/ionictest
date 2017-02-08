import { Component } from '@angular/core';


@Component({
  selector: 'page-hello-input',
  templateUrl: 'hello-input.html'
})
export class InputPage {
  constructor() {

  }
  login(value: string) {
      console.log("loginig in as " + value)
  }
}
