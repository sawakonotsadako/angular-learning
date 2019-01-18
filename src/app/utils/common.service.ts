import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {DialogComponent} from '../component/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }
  openDialog(title, content, action) {
    const config = new MatDialogConfig();
    config.data = {
      title: title,
      content: content,
      action: action
    };
    const dialogRef = this.dialog.open(DialogComponent, config);
  }
  openSnackBar(message, action) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    const dialogRef = this.snackBar.open(message, action, config);
  }
}
