import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../utils/common.service';
import {DataHelper} from '../../utils/data-helper.service';

@Component({
  selector: 'app-material-features',
  templateUrl: './material-features.component.html',
  styleUrls: ['./material-features.component.css']
})
export class MaterialFeaturesComponent implements OnInit {
  navLinks = [];
  progress = 0;
  constructor(
    private commonService: CommonService,
    private dataHelper: DataHelper
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
    this.navLinks = this.dataHelper.getNavLinks();
  }
  openDialog(title, content, action) {
    this.commonService.openDialog(title, content, action);
  }
  openSnackBar(message, action) {
    this.commonService.openSnackBar(message, action);
  }

}
