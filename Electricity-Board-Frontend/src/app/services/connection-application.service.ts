import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionApplication } from '../model/connection-application.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApplicationService {

  private apiUrl = 'http://localhost:8082/api/applications';

  constructor(private http: HttpClient) { }

  addApplication(application: ConnectionApplication){
    return this.http.post<ConnectionApplication>(`${this.apiUrl}add`, application)
  }

  getAllApplications(): Observable<ConnectionApplication[]> {
    return this.http.get<ConnectionApplication[]>(this.apiUrl);
  }

  getApplicationById(id: number): Observable<ConnectionApplication> {
    return this.http.get<ConnectionApplication>(`${this.apiUrl}/${id}`);
  }

  saveApplication(application: ConnectionApplication): Observable<ConnectionApplication> {
    if (application.id) {
      return this.http.put<ConnectionApplication>(`${this.apiUrl}/${application.id}`, application);
    } else {
      return this.http.post<ConnectionApplication>(this.apiUrl, application);
    }
  }

  deleteApplicationById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateApplication(id?: number ,application?: ConnectionApplication): Observable<ConnectionApplication> {
    return this.http.put<ConnectionApplication>(`${this.apiUrl}/${id}`, application);
  }

  getMonthlyConnectionCounts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/monthly-connection-counts`);
  }
  
}
