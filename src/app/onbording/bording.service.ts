import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BordingService {

  constructor(private http: HttpClient) { }
  mycomtype(id): Observable<any> {
    return this.http.get(`http://localhost:5000/communitytype/${id}`);
  }

  mycomblock(id): Observable<any> {
   // console.log('SERVICEFLAT', id);
    return this.http.get(`http://localhost:5000/communityblock/${id}`);
  }

  mycomflatnum(id): Observable<any> {
    console.log('SERVICEFLAT', id);
    return this.http.get(`http://localhost:5000/communityblocknumber/${id}`);
  }
   /*join tables using this.ownerid service*/
   getUnitsData(id) {
    return this.http.get(`http://localhost:5000/unitsdata/${id}`);
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
}
