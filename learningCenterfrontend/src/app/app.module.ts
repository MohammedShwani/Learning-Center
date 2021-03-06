import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { LessonsComponent } from './lessons/lessons.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HelperService } from './helper.service';
import { NgxY2PlayerModule } from 'ngx-y2-player';


const routes: Routes = [
  { path:"", redirectTo:"home", pathMatch:"full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "courses", component: CoursesComponent },
  { path: "courses/:course", component: CourseInfoComponent },
  { path: "courses/:course/lessons", component: LessonsComponent },
  { path: "users/:username", component: UserProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    CoursesComponent,
    CourseInfoComponent,
    LessonsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxY2PlayerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
