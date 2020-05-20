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
import {HttpClientModule} from '@angular/common/http'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthorListComponent } from './pages/home/author/author-list/author-list.component';
import { SubjectListComponent } from './pages/home/subject/subject-list/subject-list.component';
import { PostListComponent } from './pages/home/Post/post-list/post-list.component';
import { CommentListComponent } from './pages/home/comment/comment-list/comment-list.component';
import { EditAuthorComponent } from './pages/home/author/edit-author/edit-author.component';
import { ShowBlogComponent } from './pages/User/show-blog/show-blog.component';
 
 

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
    NotFoundComponent,
    AuthorListComponent,
    SubjectListComponent,
    PostListComponent,
    CommentListComponent,
    EditAuthorComponent,
    ShowBlogComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [SweetAlert2Module.forRoot()],
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
