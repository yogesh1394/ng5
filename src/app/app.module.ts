import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MdTableModule } from '@angular/material';
import { HttpModule } from '@angular/http';
// import {MdInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { UsersService } from './services/users.service';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoService } from './to-do/to-do.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [UsersService, ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule{}