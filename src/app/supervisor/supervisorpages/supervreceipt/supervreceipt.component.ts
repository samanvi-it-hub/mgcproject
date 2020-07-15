import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder  } from '@angular/forms';
import * as $ from 'jquery';
import 'datatables.net';
import { SupervisorService } from '../supervisor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-supervreceipt',
  templateUrl: './supervreceipt.component.html',
  styleUrls: ['./supervreceipt.component.scss']
})
export class SupervreceiptComponent implements OnInit {
  @ViewChild('dataTable', {static: true}) table: ElementRef;
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  type;
  communityname;
  GenMaintenance: FormGroup;
  blocks;
  typeofborh;
  housenums;
  Maintenance;
  maintenancedata;
  pmode;
  reciepts;
  GenReceipt: FormGroup;
  printid;
  printamt;
  date = new Date().toISOString().slice(0, 10);
 // tslint:disable-next-line:max-line-length
constructor(private fb: FormBuilder, private service: SupervisorService, private toastr: ToastrService, private router: Router) {
  this.GenReceipt = this.fb.group({
      communityid: new FormControl(this.communityid),
      startdate: new FormControl(),
      block_id: new FormControl()
  });
}
getBase64ImageFromURL(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL('image/png');

      resolve(dataURL);
    };

    img.onerror = error => {
      reject(error);
    };

    img.src = url;
  });
}

  async Print(id, mamount, dueamount, otheramount, total) {
  const docDefinition = {
    pageSize: {
      width: 595.28,
      height: 500
    },
    // watermark: { text: 'Paid', color: 'red', opacity: 0.3, bold: false, italics: true },
    header: {text: 'Payment Receipt', alignment: 'center', margin: [ 0, 10, 0, 0 ], bold: true,
    fontSize: 20},
    content: [
      {
        image: await this.getBase64ImageFromURL(
          'assets/imgs/mgclogo.png'
        ), fit: [150, 150], alignment: 'left',
      },
      { text: `Date: ${this.date}`, alignment: 'right', margin: [ 0, 10, 40, 0 ], color: '#0c61b0' },
      { text: `Community Name:${this.communityname} `, style: 'subheader', margin: [ 0, 60, 0, 5 ], },
      { text: `Invoice Id:${id} `, style: 'subheader', margin: [ 0, 0, 0, 20 ], },
          {
            style: 'tableExample',
            table: {
              widths: ['*', 'auto'],

              // tslint:disable-next-line:indent
              body: [
                [`Maintenance for ${this.date}`, `${mamount}`],
                ['Total Amount', `${total}`]
              ]
            }
          },
      { text: `Transaction Details`, alignment: 'left', margin: [ 0, 10, 40, 0 ] },
      { text: `Amount Received:`, alignment: 'left', margin: [ 0, 10, 40, 0 ] },
      { text: `Date:`, alignment: 'left', margin: [ 0, 10, 40, 0 ] },
      { text: `Received From:`, alignment: 'left', margin: [ 0, 10, 40, 0 ] },
      { text: `Comments:`, alignment: 'left', margin: [ 0, 10, 40, 0 ] },
      // tslint:disable-next-line:max-line-length
      {
        image: await this.getBase64ImageFromURL(
          'assets/imgs/paid.png'
        ), fit: [100, 100], alignment: 'right',
      },
    ],
    footer: {
      columns: [
        { text: '**This is a system generated document and does not require signature.', alignment: 'center', italics: true, fontSize: 10, }
      ]
    },
  // tslint:disable-next-line:semicolon
  }
  pdfMake.createPdf(docDefinition).open();
}


  getComtype(id) {
    this.service.getcommunityType(id).subscribe(
      data => {
        this.type = data[0].sis_community_type;
        console.log(data[0].sis_community_type);
      }
    );
  }
  getcommunity(id) {
    this.service.getCommData(id).subscribe(
      data => {
        this.communityname = data[0].sis_community_name;
        console.log('community', data[0].sis_community_name);
      }
    );
  }

  getblockdata(id) {
    this.service.getBlocks(id).subscribe(
      data => {
        this.typeofborh = data.type;
        if (data.type === 1) {
          this.blocks = data.data;
          console.log('BLOCKS', data.data);
        } else {
          this.housenums = data.data;
          console.log('HOUSES', data.data);
        }
      }
    );
  }
  getCompletePayments() {
    console.log(this.GenReceipt.value);
    this.service.recipt(this.GenReceipt.value).subscribe(
      data => {
        this.reciepts = data;
        console.log('RECEIPTS', data);
      }
    );

  }
  Data(id, amount) {
    this.printid = id;
    this.printamt = amount;
    console.log(id);
  }

  onPrintInvoice(id) {

  }

  print() {
    window.print();
  }
  ngOnInit(): void {
    this.getComtype(this.communityid);
    this.getcommunity(this.communityid);
    this.getblockdata(this.communityid);
    setTimeout(() => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.dataTable({
         columnDefs: [
          {
              targets: 0,
              checkboxes: {
                selectRow: true
             }
          }
       ],
        lengthMenu: [[2, 4, 6], [2, 4, 6]],
        pageLength: 1});
    }, 1000);
    console.log('PDF', pdfMake);
    console.log(this.date);
  }

}
