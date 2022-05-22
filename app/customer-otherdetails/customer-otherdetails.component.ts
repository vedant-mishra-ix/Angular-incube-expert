import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-otherdetails',
  templateUrl: './customer-otherdetails.component.html',
  styleUrls: ['./customer-otherdetails.component.css']
})
export class CustomerOtherdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getvalue(val:any)
  {
    

    console.warn(val)

  }

}
