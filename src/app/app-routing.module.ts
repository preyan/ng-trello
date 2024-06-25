import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { BoardComponent } from './components/protected/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { WorkspaceComponent } from './components/protected/workspace/workspace.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'workspace',
    component: WorkspaceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'workspace/:id',
    component: BoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
