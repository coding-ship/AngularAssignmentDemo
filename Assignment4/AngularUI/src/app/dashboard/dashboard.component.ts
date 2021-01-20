import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Customer } from './../customer';
import { CustomerService } from './../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
list:Customer[]=[];
stat:boolean=false;

value:any;
  constructor(private customers:CustomerService,private router:Router) {
    this.stat=false;
    setTimeout(() => {
      this.customers.getusers().subscribe(response=>{this.list=response});
    
     }, 500)
    
   // this.customers.getusers().subscribe(response=>{this.list=response});
    
   }

  ngOnInit(): void {
    
  }
  Edit(customer:Customer){
    
   this.router.navigate(['/edit'], { state: { id:customer.id,fname: customer.fname,lname:customer.lname,phone:customer.phone } });
   
  }
  Delete(id:number){
    
     this.customers.deleteuser(id).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
     window.location.reload();
    
    
   
    
  }
  Del(){
    window.location.reload();
  }

}
