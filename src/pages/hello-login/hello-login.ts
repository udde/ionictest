import { Component } from '@angular/core';


@Component({
  selector: 'hello-login',
  templateUrl: 'hello-login.html'
})

export class HelloLogin {
  constructor() {

  }
  login(value: string) {
      console.log("loginig in as " + value)
  }
}
