import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  { path: 'contacts', component: ContactsListComponent },
  { path: '', component: ContactsListComponent},
  { path: 'contacts/:id', component: ContactsListComponent },
  {
    path: 'messages',
    component: MessagesComponent  }
];



@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    LayoutComponent,
    NavbarComponent,
    MessagesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
