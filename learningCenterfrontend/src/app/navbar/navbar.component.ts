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

  openSidebar() {
    (<any>$('.ui.sidebar')).sidebar('toggle')
  }

  openAboutModal() {
    /* checks if the sidebar is not opend, if it is, then close the sidebar,
      and wait for the animation of closing to finished, once completed open
      about modal */
    let sidebarElement = (<any>$('.ui.sidebar'))
    let aboutModalElement = (<any>$('#about-modal'))

    if (!sidebarElement.sidebar("is closed")) {

      sidebarElement.sidebar('setting', 'onHidden', function(){
        aboutModalElement
          .modal('setting', 'closable', true)
          .modal('show')
      })
        .sidebar('toggle')

    } else {
      aboutModalElement
        .modal('setting', 'closable', true)
        .modal('show')
    }
  }

}
