import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { ActivateGuard } from './shared/activate.guard';
import { CrudService } from './shared/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ActivateGuard, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
