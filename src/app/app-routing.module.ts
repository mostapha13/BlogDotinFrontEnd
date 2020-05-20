import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { AuthorComponent } from './pages/home/author/author.component';
import { SubjectComponent } from './pages/home/subject/subject.component';
import { PostComponent } from './pages/home/post/post.component';
import { CommentComponent } from './pages/home/comment/comment.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthorListComponent } from './pages/home/author/author-list/author-list.component';
import { SubjectListComponent } from './pages/home/subject/subject-list/subject-list.component';
import { PostListComponent } from './pages/home/Post/post-list/post-list.component';
import { CommentListComponent } from './pages/home/comment/comment-list/comment-list.component';
import { EditAuthorComponent } from './pages/home/author/edit-author/edit-author.component';
import { ShowBlogComponent } from './pages/User/show-blog/show-blog.component';
 


const routes: Routes = [
  { path: '', component: ShowBlogComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'author', component: AuthorComponent },
  {path:'editAuthor/:id',component:EditAuthorComponent},
  { path: 'subject', component: SubjectComponent },
  { path: 'post', component: PostComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'authorList', component: AuthorListComponent },
  { path: 'subjectList', component: SubjectListComponent },
  {path:'postList',component:PostListComponent},
  {path:'commentList',component:CommentListComponent},

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
