import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CepFinderComponent } from './cep-finder/cep-finder.component';
import { CepListComponent } from './cep-list/cep-list.component';
import { CepDetailsComponent } from './cep-details/cep-details.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CepFinderComponent },
      { path: 'all', component: CepListComponent },
      {path: 'details/:cep', component: CepDetailsComponent},
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CepFinderComponent,
    CepListComponent,
    CepDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
