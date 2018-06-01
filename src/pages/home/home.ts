import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TusignoPage } from '../tusigno/tusigno';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dia: any = 0;
  mes: any = 0;
  
  
  constructor(public  navCtrl: NavController,  navParams: NavParams,public toastCtrl: ToastController) {
  }


  calcularZodiaco() {
  let flag = 0;

  if(this.mes>12 || this.mes<1){
    flag = 1;
  }
  if(this.dia>31 || this.dia<1){
    flag = 2;
  }


  if(flag==1 || flag==2){
 
    if(flag==1){
      let toast = this.toastCtrl.create({
        message: 'Ingresa un mes valido.',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  
    }
    if(flag==2){
      let toast = this.toastCtrl.create({
        message: 'Ingresa un dia valido.',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  
    }

  }else{
    this.evaluarSigno(this.dia,this.mes);
  }
 
   
  }


  evaluarSigno(d,m){
  
   switch(m){
     case '1':
   
     if(d<=20){
     let  diames = {
        dia:d,
        mes:m,
        signo : 'sag'
      };
      this.navCtrl.push(TusignoPage, diames);

     }else{
     let  diames = {
        dia:d,
        mes:m,
        signo : 'cap'
      };
       this.navCtrl.push(TusignoPage, diames);
     }
     ;break;

     case '2':
    
     if(d<=16){
      let diames = {
        dia:d,
        mes:m,
        signo : 'cap'
      };
      this.navCtrl.push(TusignoPage, diames);

     }else{
      let diames = {
        dia:d,
        mes:m,
        signo : 'acu'
      };
      this.navCtrl.push(TusignoPage, diames);
     }
     ;break;


     case '3':
    
     if(d<=16){
      var diames = {
        dia:d,
        mes:m,
        signo : 'acu'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'ari'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;


     case '4':
    
     if(d<=18){
      var diames = {
        dia:d,
        mes:m,
        signo : 'ari'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'tau'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;



     case '5':
     
     if(d<=14){
      var diames = {
        dia:d,
        mes:m,
        signo : 'tau'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'gem'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;

     case '6':
   
     if(d<=21){
      var diames = {
        dia:d,
        mes:m,
        signo : 'gem'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'can'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;
     


     case '7':
    
     if(d<=20){
      var diames = {
        dia:d,
        mes:m,
        signo : 'can'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'leo'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;



     case '8':
   
     if(d<=10){
      var diames = {
        dia:d,
        mes:m,
        signo : 'leo'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'vir'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;



     case '9':
     
     if(d<=16){
      var diames = {
        dia:d,
        mes:m,
        signo : 'vir'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'lib'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;




     case '10':
    
     if(d<=31){
      var diames = {
        dia:d,
        mes:m,
        signo : 'vir'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'lib'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;



     case '11':
   
     if(d<=23){
      var diames = {
        dia:d,
        mes:m,
        signo : 'lib'}
      this.navCtrl.push(TusignoPage, diames);

     }else if (d>=24&&d<=29){
      var diames = {
        dia:d,
        mes:m,
        signo : 'esc'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'ofi'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;
     
     case '12':
    
     if(d<=17){
      var diames = {
        dia:d,
        mes:m,
        signo : 'ofi'}
      this.navCtrl.push(TusignoPage, diames);

     }else{
      var diames = {
        dia:d,
        mes:m,
        signo : 'sag'}
      this.navCtrl.push(TusignoPage, diames);

     }
     ;break;
   }
  }

  
  ceroDia(){ 
   
    if(this.dia==0){
      this.dia="";
   
     }
   }
   ceroMes(){
   
    if(this.mes==0){
      this.mes="";
   
     }
 
   }
}
