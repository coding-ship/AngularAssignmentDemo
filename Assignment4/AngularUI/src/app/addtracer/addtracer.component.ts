import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerdashboardService } from '../customerdashboard.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-addtracer',
  templateUrl: './addtracer.component.html',
  styleUrls: ['./addtracer.component.css']
})
export class AddtracerComponent {
  status:boolean=false;
  custdata = {tracername:null,observationdate:null,observationname:null,noobservation:null};
  
    
    constructor(private router:Router,private cs:CustomerdashboardService) {}
    
    
    //http://localhost:53226/api/Customer/UpdateTracer?id=1
    
    onsubmit(tracer:Userdata){
      if(tracer.tracername==null || tracer.observationname==null ||
        tracer.noobservation==null || tracer.observationdate==null) { this.status=true; }
        else{  this.status=false;
      
    
      //console.log("tracerid"+tracer.id);
      console.log(tracer);
      this.cs.addtracer(tracer).subscribe(response=>{console.log(response)},(error:any)=>{console.log(error)});
    
      //this.cd.updatetracer(tracer.id,tracer).subscribe(response=>{console.log(response)},(error:any)=>console.log(error));
      // customer.id=this.cust.id;
      // this.customer.updateuser(customer.id,customer).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
      
      this.router.navigate(['/customerdash']);
    
    } }
    reset(){
      this.status=false;
    }
  
  
  }
  
