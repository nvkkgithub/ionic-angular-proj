import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { CommonServiceProvider } from '../../provider/common/common-service';

import { LoginPopover } from '../popover/loginPopover';
import { ListOfItemsPage } from '../listofitems/listofitems';

@Component({
  selector: 'page-home',
  templateUrl: 'home1.html'
})
export class HomePage {

  public homecontents : any;

  constructor(public navCtrl: NavController, private commonService: CommonServiceProvider,
    public popoverCtrl: PopoverController) {
  	this.loadHomePage();
  }

  openLogin(myEvent) {
    let popover = this.popoverCtrl.create(LoginPopover);
    popover.present({
      ev: myEvent
    });
  }

  loadHomePage(){
  	this.readFromFile();
  }

  goToListOfItemsPage(pageGrpObj){
     this.navCtrl.push(ListOfItemsPage, {
      pageGrp : pageGrpObj
    });
  }

  readFromFile() {
    var fileLoc : string = "assets/dummy/json/homecontent1.json";
    this.commonService.fetchRespFromLocalJson(fileLoc).then(resp => {
        this.homecontents = resp;
        console.log(this.homecontents);
      }).catch(err => {
        console.log(err);
    });
  }
}
