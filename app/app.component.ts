import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-root1',
  templateUrl:'./app.component.html',                                                    
  styleUrls: ['./app.component.css']
})
export class AppComponent1 {
  title = 'Firstangular';

  update()
  {
    this.title="vedantmishra";

    console.log("parent hu: ", this.title)
  }
      

  
}



// templateUrl: yaa per hum template jo bnate hai like html file(component) ka url dalte hai execute krne ke liye browser mai
// template:  templateUrl ki jga hum ye bee likk sakte hai per humme yaa per template ko desgin krna padega 
