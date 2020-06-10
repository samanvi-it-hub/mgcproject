import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-supervsidenav',
  templateUrl: './supervsidenav.component.html',
  styleUrls: ['./supervsidenav.component.scss']
})
export class SupervsidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
  }

}
