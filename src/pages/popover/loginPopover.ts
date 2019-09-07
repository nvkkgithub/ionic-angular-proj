import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { CommonServiceProvider } from '../../provider/common/common-service';

@Component({
  selector: 'login-popover',
  templateUrl: 'loginPopover.html'
})
export class LoginPopover {

  constructor(public viewCtrl: ViewController) {

  }

  close() {
    this.viewCtrl.dismiss();
  }
}
