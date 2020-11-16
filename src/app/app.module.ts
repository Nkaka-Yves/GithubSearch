import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';
import { ReposComponent } from './repos/repos.component';
import { HttpClientModule } from "@angular/common/http";
import { NgProgressHttpClientModule } from "@ngx-progressbar/http-client";
import { NgProgressModule } from '@ngx-progressbar/core';
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from './highlight.directive';
import { RepoDatePipe } from './repo-date.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchFormComponent,
    UserComponent,
    ReposComponent,
    HighlightDirective,
    RepoDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
