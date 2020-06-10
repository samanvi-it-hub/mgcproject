import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-ownersidenav',
  templateUrl: './ownersidenav.component.html',
  styleUrls: ['./ownersidenav.component.scss']
})
export class OwnersidenavComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  name = this.a[0].owner_name;

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
  }

}
