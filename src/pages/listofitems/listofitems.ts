import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CommonServiceProvider } from '../../provider/common/common-service';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-listofitems',
  templateUrl: 'listofitems.html'
})
export class ListOfItemsPage {

  public itemslist : any;

  public sitedata : any;

  public filterSegmSelectd : string = "";

  public pageGrpCategories : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private commonService: CommonServiceProvider) {
    
    /* TODO Move to ionViewDidLoad */
    //this.ionViewDidLoad();

  }

  ionViewDidLoad() {
    this.loadItemsListPage();
    this.readSiteStaticDataFromFile();
    var pageGrp : any = this.navParams.get('pageGrp');
    console.log("******** pageGrp value from navparam");
    console.log(pageGrp);
    if(pageGrp != undefined){
      this.pageGrpCategories = pageGrp.items;
    }  
  }

  loadItemsListPage(){
  	this.readItemsFromFile();
  }

  goToHomePage(){
     this.navCtrl.push(HomePage);
  }

  updateMouseOverFlag(selItem, mouseoverFlag){
    if(selItem != undefined){
      selItem.mouseover = mouseoverFlag;
    }
  }

  getDynamicNgClass(selItem){
    var clazz : string = (selItem != undefined && selItem.mouseover == true) ? 'desaturate_ion_card' : 'default_bg_ion_card';
    return clazz;
  }

  getCssClassForQuickView(selItem){
    var clazz : string = (selItem != undefined && selItem.mouseover == true) ? 'show' : 'hide';
    return clazz;  
  }

  showItemQuickView(selItem){
    var show : boolean = (selItem != undefined && selItem.mouseover == true) ? true : false;
    return show;
  }

  showHideQuickView(){

  }

  readItemsFromFile() {
    var fileLoc : string = "assets/dummy/json/listofitems.json";
    this.commonService.fetchRespFromLocalJson(fileLoc).then(resp => {
        this.itemslist = resp;
        console.log(this.itemslist);
      }).catch(err => {
        console.log(err);
    });
  }

  filterBySelection(){
    console.log(this.sitedata);
  }


  readSiteStaticDataFromFile() {
    var fileLoc : string = "assets/dummy/json/static-site-data.json";
    this.commonService.fetchRespFromLocalJson(fileLoc).then(resp => {
        this.sitedata = resp;
        console.log(this.sitedata);
      }).catch(err => {
        console.log(err);
    });
  }


}
