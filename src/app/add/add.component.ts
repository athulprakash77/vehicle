import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private api:ApiService){}
  
    vehicleNo= ""
    ownerName= ""
    phoneNo= ""
    emailid= ""
    pincode= " "
   
    readvalue=()=>{
let data=
{
  "vehicleNo": this.vehicleNo,
  "ownerName": this.ownerName,
  "phoneNo": this.phoneNo,
  "emailid": this.emailid,
  "pincode": this.pincode
}
console.log(data)
this.api.sentvalue(data).subscribe(
  (Response:any)=>{
    console.log(Response)
  }
)
    }


  ngOnInit(): void {
  }

}
