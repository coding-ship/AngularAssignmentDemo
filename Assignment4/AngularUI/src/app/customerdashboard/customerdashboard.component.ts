import { Component, OnInit,Input} from '@angular/core';
import { Userdata } from '../userdata';


import { CustomerdashboardService } from './../customerdashboard.service';

import { Router } from '@angular/router';
//@ViewChild('childModalOption1') childModalOption1 :CommonModalComponent;

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
  dash={traceraction:"Select Action"};
list:Userdata[]=[];
value:any[]=[];
show:boolean=true;

//@Input() show:boolean;


action:any;
  childModalOption2: any;
constructor(private cs:CustomerdashboardService,private router:Router) { 
  this.show=true;
  setTimeout(() => {
   this.cs.getdata().subscribe(response=>{this.list=response});
  }, 500)
 
 // this.cs.getdata().subscribe(response=>{this.list=response});
  
   }
 

  ngOnInit(): void {
     }

 
  Delete(id:number){
   
     this.cs.deletedata(id).subscribe(response=>{console.log(response)},(error:any)=>console.log(error));
     window.location.reload();
    
  }
 
  change(event: any,user:Userdata) { 
   // console.log("Changed month from the Dropdown");
    console.log(event.target.value);
    if(event.target.value=="Delete"){  
     this.show=false;
    
    }
    else if(event.target.value=="Edit Observation"){   console.log("userid"+user.id);
      this.router.navigate(['/edituserdata'],
     
      { state: { id:user.id, tracername: user.tracername,
       observationdate:user.observationdate ,observationname:user.observationname
       ,noobservation:user.noobservation } });

    }
    else{

    }
    //console.log(user);
    
 }
 changedata(user:Userdata){
console.log(user);
//console.log(this.action);
 }
  //  <td>{{listdata.tracername}}</td>
  //       <td>{{listdata.traceraction}}</td>
  //       <td>{{listdata.observationdate}}</td>
  //       <td>{{listdata.observationname}}</td>
  //       <td>{{listdata.noobservation}}</td>
 addnew(){
  
  this.router.navigate(['/addtracer']);
 }
 Del(){
   window.location.reload();
 }
  

}
