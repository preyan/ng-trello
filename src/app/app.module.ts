import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './components/protected/board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GravatarModule } from 'ngx-gravatar';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WorkspaceComponent } from './components/protected/workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent,
    WorkspaceComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    GravatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
