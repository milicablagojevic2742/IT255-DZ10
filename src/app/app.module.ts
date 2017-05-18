import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { OpisComponent } from './pages/opis/opis.component';
import { DeloviComponent } from './pages/delovi/delovi.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { DeloviImenaSearch } from './pages/delovi/delovi-imenasearch';
import { DeloviProizvidjacSearch } from './pages/delovi/delovi-proizvodjacsearch';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, PocetnaComponent, OpisComponent, DeloviComponent, KontaktComponent, DeloviImenaSearch,
  DeloviProizvidjacSearch],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
