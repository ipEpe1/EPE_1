import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeleccionadoPage } from './seleccionado';

@NgModule({
  declarations: [
    SeleccionadoPage,
  ],
  imports: [
    IonicPageModule.forChild(SeleccionadoPage),
  ],
})
export class SeleccionadoPageModule {}
