//Importaciones de componentes 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//Módulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


//Cambiar la fecha de la app a español
import localEs from '@angular/common/locales/es-MX';
import localFr from '@angular/common/locales/fr';
import {registerLocaleData}from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-MX'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
