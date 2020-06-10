import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-adminsidenav',
  templateUrl: './adminsidenav.component.html',
  styleUrls: ['./adminsidenav.component.scss']
})
export class AdminsidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
  }

}
