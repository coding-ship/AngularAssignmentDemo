import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdata } from './userdata';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerdashboardService {
 // http://localhost:53226/api/Customer/DeleteTracer?id=3
private url='http://localhost:53226/api/Customer/';
//http://localhost:53226/api/Customer/UpdateTracer?id=1
  constructor(private http:HttpClient) {
    
   }
 
   getdata():Observable<Userdata[]>
   {
     return this.http.get<Userdata[]>(this.url+'Getdetails');
   }
  deletedata(id:number):Observable<Userdata>
  {
  return this.http.delete<Userdata>(this.url+'DeleteTracer?id='+id,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
  }
  //http://localhost:53226/api/Customer/UpdateTracer?id=1
  updatetracer(id:number,tracer:Userdata):Observable<Userdata>
  { console.log("service id & value"+id);
   console.log(tracer);
    return this.http.put<Userdata>(this.url+'UpdateTracer?id='+id,tracer,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  

  }
 // http://localhost:53226/api/Customer/Addtrace
  addtracer(tracer:Userdata):Observable<Userdata>
  {
  return this.http.post<Userdata>(this.url+'Addtrace',tracer,{
    headers:new HttpHeaders({
   'Content-Type':'application/json'
    })
   });
}
}
