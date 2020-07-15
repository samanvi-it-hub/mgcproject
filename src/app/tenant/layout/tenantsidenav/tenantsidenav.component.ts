import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-tenantsidenav',
  templateUrl: './tenantsidenav.component.html',
  styleUrls: ['./tenantsidenav.component.scss']
})
export class TenantsidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('.sidebar-toggle').on('click', () => {

        const cls =  $('body').hasClass('sidebar-collapse');
        if (cls === true) {
             $('body').removeClass('sidebar-collapse');
        } else {
             $('body').addClass('sidebar-collapse');
        }

 });
    });
  }

}
