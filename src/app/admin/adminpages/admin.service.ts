import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  // get blocks data
  Blocks(id): Observable<any> {
    return this.http.get(`http://localhost:5000/blocks/${id}`);
  }
  Briks(id): Observable<any> {
    return this.http.get(`http://localhost:5000/briks/${id}`);
  }

   // get flats data
   Flats(id): Observable<any> {
    return this.http.get(`http://localhost:5000/flats/${id}`);
  }

  // owner tenant roles
  OwnerTenantRoles(): Observable<any> {
    return this.http.get('http://localhost:5000/ownertenantroles');
  }
  // total communities
  getCommunityData(): Observable<any> {
    return this.http.get('http://localhost:5000/communitydata');
  }

  // community type villa or appartment
  CommunityType(): Observable<any> {
    return this.http.get('http://localhost:5000/type');
  }

    // community type By ID villa or appartment
    CommunityTypeById(id): Observable<any> {
      return this.http.get(`http://localhost:5000/communitytypebyid/${id}`);
    }


  // get community names
  CommunityData(): Observable<any> {
    return this.http.get('http://localhost:5000/communitydata');
  }
  // get community roles
  getCommunityRoles(): Observable<any> {
    return this.http.get('http://localhost:5000/communityroles');
  }

  // community type
  commTypeById(id): Observable<any> {
    return this.http.get(`http://localhost:5000/communitytype/${id}`);
  }
  comtype(id): Observable<any> {
    return this.http.get(`http://localhost:5000/communitytype/${id}`);
  }
  owners(id): Observable<any> {
    return this.http.get(`http://localhost:5000/ownerdata/${id}`);
  }
  registerCommunity(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>('http://localhost:5000/reg', data, options);
  }


  owneronboardingrecords(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    console.log('service-id', data);
    return this.http.post<any>(`http://localhost:5000/allonboarding`, data, options);

  }

  regonboard(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>('http://localhost:5000/regonboard', data, options);
  }
  EmpSupRoles(): Observable<any> {
    return this.http.get('http://localhost:5000/empsuproles');
  }
  AddEmpSupFromAdmin(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/addemployeesupervisor', data, options);

  }
  approveowner(id): Observable<any> {
    console.log('service-id', id);
    return this.http.get<any>(`http://localhost:5000/aprovedata/${id}`);
  }
  Boardmembers(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/addboardmembers', data, options);
  }

  AddResident(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/ganesh', data, options);
  }


}
