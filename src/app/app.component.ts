import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DataHelper} from './utils/data-helper.service';
import {DOCUMENT} from '@angular/common';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {DialogComponent} from './component/dialog/dialog.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Food} from './model/Food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Material Demo';
  private articles = [];
  private links = [];
  navLinks = [];
  private elem;
  private fullScreen;
  private isDarkTheme = false;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    private renderer2: Renderer2,
    private dataHelper: DataHelper,
    @Inject(DOCUMENT) private document: any,
  ) {
  }
  ngOnInit(): void {
    this.elem = this.document.documentElement;
    this.articles = this.dataHelper.articles();
    this.links = this.dataHelper.sideLinks();
    this.navLinks = this.dataHelper.getNavLinks();
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    console.log('isDarkTheme=' + this.isDarkTheme);
  }
  mouseEnter (event) {
    this.renderer2.addClass(event.target, 'mat-elevation-z8');
  }
  mouseLeave (event) {
    this.renderer2.removeClass(event.target, 'mat-elevation-z8');
  }
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.fullScreen = true;
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.fullScreen = true;
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.fullScreen = true;
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.fullScreen = true;
      this.elem.msRequestFullscreen();
    }
  }
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.fullScreen = false;
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.fullScreen = false;
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.fullScreen = false;
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.fullScreen = false;
      this.document.msExitFullscreen();
    }
  }
}
