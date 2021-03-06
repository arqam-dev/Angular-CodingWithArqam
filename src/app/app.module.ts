import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppendPreZerosPipe } from './pipes/append-pre-zeros.pipe';
import { ScoreColorDirective } from './directives/score-color.directive';
import { AppendPostDashesPipe } from './pipes/append-pre-post-dashes.pipe';
import { Child1Component } from './child1/child1.component';
import { RxjsCompComponent } from './rxjs-comp/rxjs-comp.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppendPreZerosPipe,
    ScoreColorDirective,
    AppendPostDashesPipe,
    Child1Component,
    RxjsCompComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
