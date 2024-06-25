import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../services/auth.service';
import { DatabaseService } from './../../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  boards: any[] = [];
  user = this.auth.currentUser;

  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private auth: AuthService
  ) {}

  async ngOnInit() {
    this.boards = await this.databaseService.getBoards();
  }

  async startBoard() {
    const data = await this.databaseService.startBoard();

    // Load all boards because we only get back minimal data
    // Trigger needs to run first
    // Otherwise RLS would fail
    this.boards = await this.databaseService.getBoards();

    if (this.boards.length > 0) {
      const newBoard = this.boards.pop();

      if (newBoard.boards) {
        this.router.navigateByUrl(`/workspace/${newBoard.boards.id}`);
      }
    }
  }

  signOut() {
    this.auth.logout();
  }
}
