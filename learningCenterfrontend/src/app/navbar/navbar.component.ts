import { Component, OnInit } from '@angular/core';
import { InitService } from '../init.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  siteName = ""

  constructor(private appInit: InitService) { }

  ngOnInit() {
    this.siteName = this.appInit.siteName
  }

}
