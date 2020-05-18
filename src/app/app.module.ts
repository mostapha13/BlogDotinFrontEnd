import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainMenuComponent } from './shared/main-menu/main-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthorComponent } from './pages/home/author/author.component';
import { CommentComponent } from './pages/home/comment/comment.component';
import { SubjectComponent } from './pages/home/subject/subject.component';
import { PostComponent } from './pages/home/post/post.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainMenuComponent,
    HeaderComponent,
    HomeComponent,
    AuthorComponent,
    CommentComponent,
    SubjectComponent,
    PostComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
