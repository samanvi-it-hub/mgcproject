import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  isPrinting = false;

  constructor(private http: HttpClient, private router: Router) { }


  AddEmployee(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/saddemployee', data, options);
  }

  GetEmployeeDetails(id): Observable<any> {
    return this.http.get(`http://localhost:5000/getsuperemployeedata/${id}`);
  }

  EditEmployee(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/seditemployee', data, options);
  }

  AddVendor(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/addvendor', data, options);

  }

  AllVendors(id): Observable<any> {
    return this.http.get(`http://localhost:5000/allcommvendors/${id}`);
  }

  EditVendor(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/editvendor', data, options);

  }
  AllComplaints(id): Observable<any> {
    return this.http.get(`http://localhost:5000/scomplaintsbyid/${id}`);
  }

  getAllEmployees(id): Observable<any> {
    return this.http.get(`http://localhost:5000/getsuperemployeedata/${id}`);
  }

  getTasklist(): Observable<any> {
    return this.http.get('http://localhost:5000/tasklist');
  }
  AddDailyTask(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/addtaskdaily', data, options);

  }

  getAllUnits(id): Observable<any> {
    return this.http.get(`http://localhost:5000/sallunitsbyid/${id}`);
  }

  getcommunityType(id): Observable<any> {
    return this.http.get(`http://localhost:5000/communitytypebyid/${id}`);
  }

  RegComplaints(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/addcomplaints', data, options);

  }

  SUpdateComplaint(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/supdatecomplaint', data, options);

  }
  History(id): Observable<any> {
    return this.http.get(`http://localhost:5000/history/${id}`);
  }
  getCommData(id): Observable<any> {
    return this.http.get(`http://localhost:5000/getcomdata/${id}`);
  }
  attendence_in(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/attendence', data, options);

  }
  attendence_out(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/attendenceupdate', data, options);

  }
  getemployees(id): Observable<any> {
    return this.http.get(`http://localhost:5000/getsuperemployeedata/${id}`);
  }
  todayEmps(id, date): Observable<any> {
    return this.http.get(`http://localhost:5000/gettodayemps/${id}/${date}`);

  }
  CommType(id): Observable<any> {
    return this.http.get(`http://localhost:5000/communitytypebyid/${id}`);

  }
  getBlocks(id): Observable<any> {
    return this.http.get(`http://localhost:5000/blocksdata/${id}`);
  }
  AddMaintenancee(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/commmaintenance', data, options);


  }
  add_dues(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/addotherdues', data, options);

  }

  maintenance(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/paymentmaintenance', data, options);
  }

  PaymentMode(): Observable<any> {
    return this.http.get('http://localhost:5000/paymentmode');
  }
  pay_status(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/payment', data, options);

  }
  recipt(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/recipt', data, options);

  }


}
